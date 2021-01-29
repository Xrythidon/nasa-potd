import moment from "moment";

const checkDateConstraints = (date) => {
    const beforeDayConstraint = moment("1995-06-20");
    const afterDayConstraint = moment();

    if (
      moment(date).isSameOrAfter(beforeDayConstraint, "day") &&
      moment(date).isSameOrBefore(afterDayConstraint,"day")
    ) {
      return true;
    } else {
      return false;
    }
  };


export default checkDateConstraints