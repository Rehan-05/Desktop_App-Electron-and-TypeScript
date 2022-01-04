import React, { useEffect, useRef } from "react";

import Gantt from "frappe-gantt";
import "./style.scss";

const data = [
  {
    id: "Task 1",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: " "
  },
  {
    id: "Task 2",
    custom_class: "c-red",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: "Task 1"
  },
  {
    id: "Task 3",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: " Task 2"
  }
  ,
  {
    id: "Task 4",
    name: "Redesign website",
    start: "2017-01-08",
    end: "2017-01-31",
    progress: 20,
    dependencies: " Task 3"
  }
  ,
  {
    id: "Task 4",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: " Task 2"
  },
  {
    id: "Task 2",
    custom_class: "c-red",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: "Task 1"
  },
  {
    id: "Task 3",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: " Task 2"
  }
  ,
  {
    id: "Task 4",
    name: "Redesign website",
    start: "2017-01-08",
    end: "2017-01-31",
    progress: 20,
    dependencies: " Task 3"
  }
  ,
  {
    id: "Task 4",
    name: "Redesign website",
    start: "2016-12-28",
    end: "2016-12-31",
    progress: 20,
    dependencies: " Task 2"
  }

];

function TimeLine() {
  return (

      <Chart data={data} />

  );
}

function Chart({ data }) {
  const ref = useRef();
  const chart = useRef();

  function onViewChange(mode) {
    console.log(mode);
  }

  function onDateChange(task, start, end) {
    console.log(task, start, end);
  }

  function onProgressChange(task, progress) {
    console.log(task, progress);
  }

  function onClick(task) {
    console.log(task);
  }



  useEffect(() => {
    if (chart.current) return;

    chart.current = new Gantt(ref.current, data, {
      on_view_change: onViewChange,
      on_date_change: onDateChange,
      on_progress_change: onProgressChange,
      on_click: onClick
    });
  }, [data]);

  return <div style={{width:"100%"}}>
    <svg  id="gantt" ref={ref}></svg>
  </div>;
}

export default TimeLine;
