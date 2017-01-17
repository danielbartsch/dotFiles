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

function printTypeAlias(print, node) {
  return (0, _utilsFlatten2['default'])(['type', _constantsMarkers2['default'].noBreak, _constantsMarkers2['default'].space, print(node.id), node.typeParameters ? print(node.typeParameters) : _constantsMarkers2['default'].empty, _constantsMarkers2['default'].noBreak, _constantsMarkers2['default'].space, '=', _constantsMarkers2['default'].space, print(node.right), _constantsMarkers2['default'].noBreak, ';', _constantsMarkers2['default'].hardBreak]);
}

module.exports = printTypeAlias;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9yZXByaW50LWpzL3ByaW50ZXJzL3NpbXBsZS9wcmludFR5cGVBbGlhcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7NEJBYW9CLHFCQUFxQjs7OztnQ0FDckIseUJBQXlCOzs7O0FBRTdDLFNBQVMsY0FBYyxDQUFDLEtBQVksRUFBRSxJQUFlLEVBQVM7QUFDNUQsU0FBTywrQkFBUSxDQUNiLE1BQU0sRUFDTiw4QkFBUSxPQUFPLEVBQ2YsOEJBQVEsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQ2QsSUFBSSxDQUFDLGNBQWMsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLDhCQUFRLEtBQUssRUFDaEUsOEJBQVEsT0FBTyxFQUNmLDhCQUFRLEtBQUssRUFDYixHQUFHLEVBQ0gsOEJBQVEsS0FBSyxFQUNiLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQ2pCLDhCQUFRLE9BQU8sRUFDZixHQUFHLEVBQ0gsOEJBQVEsU0FBUyxDQUNsQixDQUFDLENBQUM7Q0FDSjs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLGNBQWMsQ0FBQyIsImZpbGUiOiJwcmludFR5cGVBbGlhcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB0eXBlIHtMaW5lcywgUHJpbnR9IGZyb20gJy4uLy4uL3R5cGVzL2NvbW1vbic7XG5pbXBvcnQgdHlwZSB7VHlwZUFsaWFzfSBmcm9tICdhc3QtdHlwZXMtZmxvdyc7XG5cbmltcG9ydCBmbGF0dGVuIGZyb20gJy4uLy4uL3V0aWxzL2ZsYXR0ZW4nO1xuaW1wb3J0IG1hcmtlcnMgZnJvbSAnLi4vLi4vY29uc3RhbnRzL21hcmtlcnMnO1xuXG5mdW5jdGlvbiBwcmludFR5cGVBbGlhcyhwcmludDogUHJpbnQsIG5vZGU6IFR5cGVBbGlhcyk6IExpbmVzIHtcbiAgcmV0dXJuIGZsYXR0ZW4oW1xuICAgICd0eXBlJyxcbiAgICBtYXJrZXJzLm5vQnJlYWssXG4gICAgbWFya2Vycy5zcGFjZSxcbiAgICBwcmludChub2RlLmlkKSxcbiAgICBub2RlLnR5cGVQYXJhbWV0ZXJzID8gcHJpbnQobm9kZS50eXBlUGFyYW1ldGVycykgOiBtYXJrZXJzLmVtcHR5LFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgICc9JyxcbiAgICBtYXJrZXJzLnNwYWNlLFxuICAgIHByaW50KG5vZGUucmlnaHQpLFxuICAgIG1hcmtlcnMubm9CcmVhayxcbiAgICAnOycsXG4gICAgbWFya2Vycy5oYXJkQnJlYWssXG4gIF0pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHByaW50VHlwZUFsaWFzO1xuIl19