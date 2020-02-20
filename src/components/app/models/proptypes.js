import PropTypes from "prop-types";

export const todoProptype = PropTypes.shape({
  id: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  completed: PropTypes.boolean
});

export const todoArrayProptype = PropTypes.arrayOf(todoProptype).isRequired;

export const enumFilterProptype = PropTypes.oneOf(["all", "active", "completed"]).isRequired;
