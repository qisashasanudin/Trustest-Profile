const Rules = ({ subjectName, quizName }) => {
  return (
    <div>
      <div className="examprep__steps__header">
        <h1>Exam Rules</h1>
        <p>{subjectName}</p>
        <p>{quizName}</p>
      </div>
      <div className="examprep__steps__content"></div>
    </div>
  );
};

export default Rules;
