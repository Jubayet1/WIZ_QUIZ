function OpenScreen(props) {
  return (
    <div className="open-screen-content">
      <h1 className="header">Wiz Quiz</h1>
      <p className="description">Welcome to the world of trivia</p>
      <button
        className="start-btn"
        onClick={() => props.setShowQuestions(true)}
      >
        Start quiz
      </button>
    </div>
  );
}

export default OpenScreen;
