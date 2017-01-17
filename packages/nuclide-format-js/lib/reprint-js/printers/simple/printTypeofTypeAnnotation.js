function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/*
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 */

var _utilsFlatten = require('../../utils/flatten');

var _utilsFlatten2 = _interopRequireDefault(_utilsFlatten);

var _constantsMarkers = require('../../constants/markers');

var _constantsMarkers2 = _interopRequireDefault(_constantsMarkers);

function printTypeofTypeAnnotation(print, node) {
  return (0, _utilsFlatten2['default'])(['typeof', _constantsMarkers2['default'].noBreak, _constantsMarkers2['default'].space, print(node.argument)]);
}

module.exports = printTypeofTypeAnnotation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFR5cGVvZlR5cGVBbm5vdGF0aW9uLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs0QkFhb0IscUJBQXFCOzs7O2dDQUNyQix5QkFBeUI7Ozs7QUFFN0MsU0FBUyx5QkFBeUIsQ0FDaEMsS0FBWSxFQUNaLElBQTBCLEVBQ25CO0FBQ1AsU0FBTywrQkFBUSxDQUNiLFFBQVEsRUFDUiw4QkFBUSxPQUFPLEVBQ2YsOEJBQVEsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQ3JCLENBQUMsQ0FBQztDQUNKOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcseUJBQXlCLENBQUMiLCJmaWxlIjoicHJpbnRUeXBlb2ZUeXBlQW5ub3RhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7VHlwZW9mVHlwZUFubm90YXRpb259IGZyb20gJ2FzdC10eXBlcy1mbG93JztcblxuaW1wb3J0IGZsYXR0ZW4gZnJvbSAnLi4vLi4vdXRpbHMvZmxhdHRlbic7XG5pbXBvcnQgbWFya2VycyBmcm9tICcuLi8uLi9jb25zdGFudHMvbWFya2Vycyc7XG5cbmZ1bmN0aW9uIHByaW50VHlwZW9mVHlwZUFubm90YXRpb24oXG4gIHByaW50OiBQcmludCxcbiAgbm9kZTogVHlwZW9mVHlwZUFubm90YXRpb24sXG4pOiBMaW5lcyB7XG4gIHJldHVybiBmbGF0dGVuKFtcbiAgICAndHlwZW9mJyxcbiAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgbWFya2Vycy5zcGFjZSxcbiAgICBwcmludChub2RlLmFyZ3VtZW50KSxcbiAgXSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gcHJpbnRUeXBlb2ZUeXBlQW5ub3RhdGlvbjtcbiJdfQ==