import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer} from 'recharts';


const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };

const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  

const Statistics = () => {
    const assignments = [
        { id: 1, name: "Assignment 1", marks: 60 },
        { id: 2, name: "Assignment 2", marks: 60 },
        { id: 3, name: "Assignment 3", marks: 60 },
        { id: 4, name: "Assignment 4", marks: 60 },
        { id: 5, name: "Assignment 5", marks: 60 },
        { id: 6, name: "Assignment 6", marks: 60 },
        { id: 7, name: "Assignment 7", marks: 60 },
        { id: 8, name: "Assignment 8", marks: 60 },
    ];



    return (
        <div>
            <h2 className='text-4xl text-center my-5 font-semibold '>Assignment Statistics</h2>
            
           <div className=" w-11/12 md:w-9/12 mx-auto">

           <ResponsiveContainer width="100%" height={250}>
           <BarChart
                width={350}
                height={250}
                data={assignments}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip></Tooltip>
                <Bar dataKey="marks" fill="#8884d8" shape={<TriangleBar />} label={{ position: 'top' }}>
                    {assignments.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % 20]} />
                    ))}
                </Bar>
            </BarChart>

           </ResponsiveContainer>

           </div>

        </div>
    );
};

export default Statistics;