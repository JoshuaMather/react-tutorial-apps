import { useSelector } from 'react-redux'

function CarValue() {
    // const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
    //     data.filter((car) => {
    //         car.name.toLowerCase().includes(searchTerm.toLowerCase())
    //     }).reduce((acc, car) => acc + car.cost, 0)
    // })

    const totalCost = useSelector(({ cars: { data, searchTerm } }) => {
        const filteredCars = data.filter((car) => {
            return car.name.toLowerCase().includes(searchTerm.toLowerCase());
        });

        return filteredCars.reduce((acc, car) => {
            return acc + car.cost
        }, 0);
    })

    console.log(totalCost);

    return (
        <div className="car-value">
            Total Cost: ${totalCost}
        </div>
    );
}

export default CarValue;