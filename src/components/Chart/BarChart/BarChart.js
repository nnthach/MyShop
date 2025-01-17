import { Bar } from 'react-chartjs-2';

function BarChart({ chartData }) {
    return (
        <div>
            <Bar
                data={chartData}
                options={{
                    plugins: {
                        title: {
                            display: true,
                            text: 'New Users Gained',
                        },
                        legend: {
                            display: false,
                        },
                    },
                }}
            />
        </div>
    );
}

export default BarChart;
