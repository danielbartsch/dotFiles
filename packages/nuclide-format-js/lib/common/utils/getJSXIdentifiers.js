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

var _jscodeshift = require('jscodeshift');

var _jscodeshift2 = _interopRequireDefault(_jscodeshift);

var _StringUtils = require('./StringUtils');

// TODO: make this configurable somehow, we probably don't want to explicitly
// list out all of the lowercase html tags that are built-in
var LOWER_CASE_WHITE_LIST = new Set(['fbt']);

/**
 * This will get a list of identifiers for JSXElements in the AST
 */
function getJSXIdentifiers(root) {
  var ids = new Set();
  root
  // There should be an opening element for every single closing element so
  // we can just look for opening ones
  .find(_jscodeshift2['default'].JSXOpeningElement).filter(function (path) {
    return _jscodeshift2['default'].JSXIdentifier.check(path.node.name);
  }).forEach(function (path) {
    var name = path.node.name.name;
    // TODO: should this be here or in addMissingRequires?
    if (!(0, _StringUtils.isLowerCase)(name) || LOWER_CASE_WHITE_LIST.has(name)) {
      ids.add(name);
    }
  });
  return ids;
}

module.exports = getJSXIdentifiers;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21tb24vdXRpbHMvZ2V0SlNYSWRlbnRpZmllcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OzJCQVlpQixhQUFhOzs7OzJCQUNKLGVBQWU7Ozs7QUFJekMsSUFBTSxxQkFBcUIsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Ozs7O0FBSy9DLFNBQVMsaUJBQWlCLENBQUMsSUFBZ0IsRUFBZTtBQUN4RCxNQUFNLEdBQUcsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO0FBQ3RCLE1BQUk7OztHQUdELElBQUksQ0FBQyx5QkFBSyxpQkFBaUIsQ0FBQyxDQUM1QixNQUFNLENBQUMsVUFBQSxJQUFJO1dBQUkseUJBQUssYUFBYSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztHQUFBLENBQUMsQ0FDeEQsT0FBTyxDQUFDLFVBQUEsSUFBSSxFQUFJO0FBQ2YsUUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDOztBQUVqQyxRQUFJLENBQUMsOEJBQVksSUFBSSxDQUFDLElBQUkscUJBQXFCLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO0FBQ3pELFNBQUcsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7S0FDZjtHQUNGLENBQUMsQ0FBQztBQUNMLFNBQU8sR0FBRyxDQUFDO0NBQ1o7O0FBRUQsTUFBTSxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyIsImZpbGUiOiJnZXRKU1hJZGVudGlmaWVycy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTUtcHJlc2VudCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgbGljZW5zZSBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGluXG4gKiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAZmxvd1xuICovXG5cbmltcG9ydCB0eXBlIHtDb2xsZWN0aW9ufSBmcm9tICcuLi90eXBlcy9hc3QnO1xuXG5pbXBvcnQganNjcyBmcm9tICdqc2NvZGVzaGlmdCc7XG5pbXBvcnQge2lzTG93ZXJDYXNlfSBmcm9tICcuL1N0cmluZ1V0aWxzJztcblxuLy8gVE9ETzogbWFrZSB0aGlzIGNvbmZpZ3VyYWJsZSBzb21laG93LCB3ZSBwcm9iYWJseSBkb24ndCB3YW50IHRvIGV4cGxpY2l0bHlcbi8vIGxpc3Qgb3V0IGFsbCBvZiB0aGUgbG93ZXJjYXNlIGh0bWwgdGFncyB0aGF0IGFyZSBidWlsdC1pblxuY29uc3QgTE9XRVJfQ0FTRV9XSElURV9MSVNUID0gbmV3IFNldChbJ2ZidCddKTtcblxuLyoqXG4gKiBUaGlzIHdpbGwgZ2V0IGEgbGlzdCBvZiBpZGVudGlmaWVycyBmb3IgSlNYRWxlbWVudHMgaW4gdGhlIEFTVFxuICovXG5mdW5jdGlvbiBnZXRKU1hJZGVudGlmaWVycyhyb290OiBDb2xsZWN0aW9uKTogU2V0PHN0cmluZz4ge1xuICBjb25zdCBpZHMgPSBuZXcgU2V0KCk7XG4gIHJvb3RcbiAgICAvLyBUaGVyZSBzaG91bGQgYmUgYW4gb3BlbmluZyBlbGVtZW50IGZvciBldmVyeSBzaW5nbGUgY2xvc2luZyBlbGVtZW50IHNvXG4gICAgLy8gd2UgY2FuIGp1c3QgbG9vayBmb3Igb3BlbmluZyBvbmVzXG4gICAgLmZpbmQoanNjcy5KU1hPcGVuaW5nRWxlbWVudClcbiAgICAuZmlsdGVyKHBhdGggPT4ganNjcy5KU1hJZGVudGlmaWVyLmNoZWNrKHBhdGgubm9kZS5uYW1lKSlcbiAgICAuZm9yRWFjaChwYXRoID0+IHtcbiAgICAgIGNvbnN0IG5hbWUgPSBwYXRoLm5vZGUubmFtZS5uYW1lO1xuICAgICAgLy8gVE9ETzogc2hvdWxkIHRoaXMgYmUgaGVyZSBvciBpbiBhZGRNaXNzaW5nUmVxdWlyZXM/XG4gICAgICBpZiAoIWlzTG93ZXJDYXNlKG5hbWUpIHx8IExPV0VSX0NBU0VfV0hJVEVfTElTVC5oYXMobmFtZSkpIHtcbiAgICAgICAgaWRzLmFkZChuYW1lKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgcmV0dXJuIGlkcztcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBnZXRKU1hJZGVudGlmaWVycztcbiJdfQ==