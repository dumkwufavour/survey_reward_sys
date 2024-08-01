import { useEffect, useState } from 'react';

export default function Surveys() {
  const [surveys, setSurveys] = useState([]);

  useEffect(() => {
    fetch('/surveys')
      .then((response) => response.json())
      .then((data) => setSurveys(data));
  }, []);

  return (
    <div>
      <h1>Surveys</h1>
      <ul>
        {surveys.map((survey) => (
          <li key={survey._id}>{survey.title}</li>
        ))}
      </ul>
    </div>
  );
}
