import Button from "./Button.jsx";
// take in array of objects from the fetch from all activities
// map through, creating a button for each one,
function ActivityBank({ allActivities, handleMoveToMyDay }) {
  const color = "secondary";
  return (
    <>
      <div className="card bg-base-100 mt-3">
        <h2 className="card-header text-center text-neutral font-bold text-2xl p-2 bg-secondary">
          Sharkommuni7y Activities
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 p-3 gap-3">
          {allActivities.map((activity) => (
            <Button
              activity={activity}
              key={activity._id}
              handleMoveToMyDay={handleMoveToMyDay}
              color={color}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default ActivityBank;
