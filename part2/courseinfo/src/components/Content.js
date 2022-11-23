import Part from "./Part";
import Total from "./Total";

const Content = ({ parts, courseId }) => {
  const total = parts.reduce((total, part) => {
    return part.exercises + total;
  }, 0);

  return (
    <div>
      {parts.map((part) => {
        return (
          <Part key={part.id} name={part.name} exercises={part.exercises} />
        );
      })}
      <Total total={total} />
    </div>
  );
};

export default Content;
