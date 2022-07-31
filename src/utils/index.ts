import { Pagination, Sort, Filter } from '../types';
import { FILTER_COMPARISON } from '../constants';

export const getPaginationParams = (pagination: Pagination) => {
  return (Object.keys(pagination) as (keyof Pagination)[])
    .map(key => `${key}=${pagination[key]}`)
    .join('&');
};

export const getSortParams = ({ property, direction }: Sort) => {
  return `sort=${property}:${direction}`;
};

export const getFilterParams = ({ property, value, exclude, exists, comparisonRule }: Filter) => {
  let comparison = '=';

  if (exists) {
    return property;
  }

  if (exclude) {
    comparison = '!=';
  } else if (comparisonRule) {
    switch (comparisonRule) {
      case FILTER_COMPARISON.LESS_THAN:
        comparison = '<';
        break;
      case FILTER_COMPARISON.LESS_THAN_EQUAL:
        comparison = '<=';
        break;
      case FILTER_COMPARISON.GREATER_THAN:
        comparison = '>';
        break;
      case FILTER_COMPARISON.GREATER_THAN_EQUAL:
        comparison = '>=';
        break;
      default:
        break;
    }
  }

  const transformedValue = Array.isArray(value) ? value.join(',') : value;

  return `${property}${comparison}${transformedValue}`;
};
