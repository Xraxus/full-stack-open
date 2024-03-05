const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ sum }) => (
  <p>
    <strong>Total of {sum} exercises</strong>
  </p>
);

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
    <Content parts={course.parts} />{" "}
    <Total
      sum={course.parts.reduce((acc, course) => acc + course.exercises, 0)}
    />
  </>
);

export default Course;
