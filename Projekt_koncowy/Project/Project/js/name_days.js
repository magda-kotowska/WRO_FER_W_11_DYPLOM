import React from "react";

class NameDays extends React.Component {


 renderNameDays() {
    return <div className="days row">
      {<div className="col col-center">{"Monday"}</div>}
      {<div className="col col-center">{"Tuesday"}</div>}
      {<div className="col col-center">{"Wednesday"}</div>}
      {<div className="col col-center">{"Thursday"}</div>}
      {<div className="col col-center">{"Friday"}</div>}
      {<div className="col col-center">{"Saturday"}</div>}
      {<div className="col col-center">{"Sunday"}</div>}
      </div>
    }

    render() {
        return (<>
            {this.renderNameDays()}
            </>
        )
    }

}

export default NameDays;