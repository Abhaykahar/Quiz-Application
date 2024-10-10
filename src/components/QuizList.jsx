import React from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';

const QuizList = ({ quizzes, setCurrentQuiz }) => {
  return (
    <div className="quiz-list">
      <h2 className="text-center mb-4">Available Quizzes</h2>
      <Row>
        {quizzes.map((quiz) => (
          <Col md={4} sm={6} xs={12} key={quiz.id} className="mb-4">
            <Card className="quiz-card shadow-sm h-100">
              <Card.Body>
                <Card.Title>{quiz.title}</Card.Title>
                <Card.Text>{quiz.description}</Card.Text>
                <Button 
                  variant="dark" 
                  className="w-100" 
                  onClick={() => setCurrentQuiz(quiz)}
                >
                  Start Quiz
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default QuizList;
