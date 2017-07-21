import React from 'react';
import { connect } from 'react-redux';
import Navigation from './Navigation';
function mapStateToProps(state) {
    return {
        numberOfCourses: state.courses.getNumberOfCourses(),
    }
}
export default connect(mapStateToProps)(Navigation)