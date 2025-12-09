import Activity from "./components/Card/Activity/Activity";
import Card from "./components/Card/Card";
import Focus from "./components/Card/Focus/Focus";
import Notes from "./components/Card/Notes/Notes";
import Tasks from "./components/Card/Tasks/Tasks";
import DateComponent from "./components/Card/Time/Date";
import Time from "./components/Card/Time/Time";
import Weather from "./components/Card/Weather/Weather";

function MainContent() {
  return (
    <div className="flex justify-center">
      <div className="grid grid-cols-2 gap-4 w-fit h-full p-4">
        {/* LEFT COLUMN */}
        <div className="flex flex-col gap-4">
          <Card title="Weather">
            <Weather />
          </Card>
          <Card title="Activity">
            <Activity />
          </Card>
          <Card title="Tasks">
            <Tasks />
          </Card>
        </div>

        {/* RIGHT COLUMN */}
        <div className="flex flex-col gap-4">
          <Card title="Time">
            <Time/>
          </Card>
          <Card title="Focus">
            <Focus />
          </Card>
          <Card title="Notes">
            <Notes />
          </Card>
          <Card title="Date">
            <DateComponent />
          </Card>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
