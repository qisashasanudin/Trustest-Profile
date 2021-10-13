import CircleLoader from "../../../atoms/CircleLoader/CircleLoader";
import React from 'react';
import { Mic } from "@mui/icons-material";

const SystemCheck = () => {

  var audioContext;
  var mediaStreamSource = null
  var meter = null
  const [micOn, setMicOn] = React.useState(false)


  function beginMicDetect() {
    audioContext = new (window.AudioContext || window.webkitAudioContext)()
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({audio: true}).then((stream) => {
        mediaStreamSource = audioContext.createMediaStreamSource(stream)
        meter = createAudioMeter(audioContext)
        mediaStreamSource.connect(meter)
        setMicOn(true)
      })
    }
  }

  function createAudioMeter(audioContext, clipLevel, averaging, clipLag) {
    const processor = audioContext.createScriptProcessor(512)
    processor.onaudioprocess = volumeAudioProcess
    processor.clipping = false
    processor.lastClip = 0
    processor.volume = 0
    processor.clipLevel = clipLevel || 0.98
    processor.averaging = averaging || 0.95
    processor.clipLag = clipLag || 750

    // this will have no effect, since we don't copy the input to the output,
    // but works around a current Chrome bug.
    processor.connect(audioContext.destination)

    processor.checkClipping = function () {
      if (!this.clipping) {
        return false
      }
      if ((this.lastClip + this.clipLag) < window.performance.now()) {
        this.clipping = false
      }
      return this.clipping
    }

    processor.shutdown = function () {
      this.disconnect()
      this.onaudioprocess = null
    }

    return processor
  }

  function volumeAudioProcess(event) {
    const buf = event.inputBuffer.getChannelData(0)
    const bufLength = buf.length
    let sum = 0
    let x

    // Do a root-mean-square on the samples: sum up the squares
    for (var i = 0; i < bufLength; i++) {
      x = buf[i]
      if (Math.abs(x) >= this.clipLevel) {
          this.clipping = true
          this.lastClip = window.performance.now()
      }
      sum += x * x
    }

    // take the square root of the sum.
    const rms = Math.sqrt(sum / bufLength)

    // Now smooth this out with the averaging factor applied
    // to the previous sample - take the max here because we
    // want "fast attack, slow release."
    this.volume = Math.max(rms, this.volume * this.averaging)
    // console.log(this.volume)
  }

  beginMicDetect()

  return (
    <div>
      <div className="examprep__steps__header">
        <h1>System Check</h1>
        <p>TRUSTest is checking your system and environment</p>
        <div className="examprep__steps__content">
          {micOn ? <Mic sx={{ fontSize: 100 }} />: <CircleLoader />}
        </div>
      </div>
      <div className="examprep__steps__content"></div>
    </div>
  );

  
};

export default SystemCheck;
