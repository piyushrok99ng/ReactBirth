import React,{useState, useRef, useEffect} from "react";

function Record(props) {
    const [data,setData] = useState([
        {
            name: "John Sina",
            birth: "11/30/2011"
        }, {
            name: "Barcy Washington",
            birth: "09/16/1992"
        }, {
            name: "Peter Parker",
            birth: "01/16/1992"
        }, {
            name: "Jimmy Shergil",
            birth: "12/12/2011"
        }, {
            name: "Alexander Alfred",
            birth: "02/09/1891"
        }, {
            name: "Krishna Gupta",
            birth: "12/01/1982"
        }, {
            name: "Sania Mirza",
            birth: "11/30/2011"
        }, {
            name: "Lata Pathak",
            birth: "10/31/1999"
        }
    ]);
    const posts = React.useRef(null);
    function compareDates(person1, person2) {
		// complete this date comparator which enables sort by age
		let a = new Date(person1.birth);
		let b = new Date(person2.birth);
		return a - b;

	}

   function compareNames(person1, person2) {
		// complete this string comparator with enables sort by name
		if (person1.name < person2.name) {
			return -1;

		} else if (person1.name > person2.name) {
			return 1;

		} else {
			return 0;
		}
	}

    // function componentDidUpdate(prevProps, prevState) {

	// 	if (prevProps.sortParameter !== this.props.sortParameter) {
	// 		if (props.sortParameter === 'name') {
	// 			let sortByName = data.sort(compareNames);
    //             setData(sortByName);
	// 		} else {
	// 			let sortByAge = data.sort(compareDates);
    //             setData(sortByAge);
	// 		}
	// 	}
	// }

    useEffect( () => {
        console.log(props);
        if (props.param === 'name') {
            let sortByName = data.sort(compareNames);
            setData([...sortByName]);
            console.log('age sort'+ data[1].name);
        } else if (props.param === 'age') {
            let sortByAge = data.sort(compareDates);
            setData([...sortByAge]);
            console.log('age sort'+ data[1].name);
        }
      },[props]);

      const sorting = (col) => {
        const sorted = [...data].sort((a,b) =>
        a[col].toLowercase() > b[col].toLowercase() ? 1 : -1 
        );
        setData(sorted);
      }
    
return (
    <div>
    <table className='table table-striped table-bordered table-hover full-width'>
					<thead>
						<tr>
							<th className='course-name'>Person Name</th>
							<th className='duration'>Date of Birth</th>
						</tr>
					</thead>
					<tbody>
						{data.map((obj, index) => (
							<tr key={index}>
								<td>{obj.name} </td>
								<td>{obj.birth} </td>
							</tr>
						)
						)}
					</tbody>
				</table>
    </div>
)
}
export default Record;