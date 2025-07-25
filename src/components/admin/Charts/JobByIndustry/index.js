import { useEffect, useState } from "react";
import { getJobsByIndustry } from "../../../../api/getJobsByIndustry";
import { message } from "antd";
import { PieChart, Pie, Tooltip, Cell } from "recharts";

export const JobByIndustry = () => {
  const [data, setData] = useState([]);
  const token = JSON.parse(localStorage.getItem("token"));
  const fetchData = async () => {
    try {
      const response = await getJobsByIndustry(token);
      const responseData = response.data;
      setData(
        Object.entries(responseData).map(([key, value]) => ({
          name: key,
          value,
        }))
      );
      message.success("Data fetched successfully");
    } catch (error) {
      message.error(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  return (
    <>
     {
      data.length===0?(<p className="my-10 text-red-500 font-bold">No data</p>):( <PieChart width={400} height={400}>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={150}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
          
        </Pie>
        <Tooltip />
        
      </PieChart>)
     }
    </>
  );
};
