/* global mixitup, h */

/**
 * @constructor
 * @memberof    mixitup
 * @private
 * @since       3.0.0
 */

mixitup.CommandFilter = function() {
    mixitup.Base.call(this);

    this.callActions('beforeConstruct');

    this.selector   = '';
    this.collection = [];
    this.action     = 'show'; // enum: ['show', 'hide']

    this.callActions('afterConstruct');

    h.seal(this);
};

mixitup.BaseStatic.call(mixitup.CommandFilter);

mixitup.CommandFilter.prototype = Object.create(mixitup.Base.prototype);

mixitup.CommandFilter.prototype.constructor = mixitup.CommandFilter;