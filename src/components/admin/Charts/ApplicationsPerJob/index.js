import { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip } from "recharts";
import { getApplicationsPerJob } from "../../../../api/getApplicationsPerJob";
import { message } from "antd";

export const ApplicationPerJob = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const fetchData = async () => {
    try {
      const response = await getApplicationsPerJob(token);
      const responseData = response.data;
      setData(responseData);

      message.success("Data fetched successfully");
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
     {
      data.length===0?(<p className="my-10 text-red-500 font-bold hover:text-blue-500">No data</p>):( <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="jobTitle" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="applications" fill="#82ca9d" />
      </BarChart>)
     }
    </div>
  );
};
