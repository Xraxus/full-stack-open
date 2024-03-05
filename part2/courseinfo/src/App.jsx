const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => <p>Number of exercises {sum}</p>;

const Part = ({ part }) => (
  <p>
    {part.name} {part.exercises}
  </p>
);

const Content = ({ parts }) => (
  <>
    {parts.map((item) => (
      <Part key={item.id} part={item} />
    ))}
  </>
);

const Course = ({ course }) => (
  <>
    <Header course={course.name} />
  </>
);

const App = () => {
  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: "Rendering collections",
        exercises: 10,
        id: 4,
      },
    ],
  };

  return (
    <>
      <Course course={course} />
      <Content parts={course.parts} />
      <Total
        sum={course.parts.reduce((acc, course) => acc + course.exercises, 0)}
      />
    </>
  );
};

export default App;
