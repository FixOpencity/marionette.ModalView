'use strict';

var ModalView = Mn.LayoutView.extend( {

  className : 'modal',

  regions : { body : '.modal__body' },

  ui : { title : '.modal-header__title', close : '.modal-header__close' },

  events : {
    'click' : function ( e ) {
      if ( e.target === this.el || e.target === this.ui.close[0] ) {
        if ( this.onClose() ) {
          this.destroy();
          this.onClosed();
        }
      }
    }
  },

  modelEvents : {
    'change:title' : function ( m, title ) { this.ui.title.text( title ); }
  },

  initialize : function ( options ) {
    this.childView = options.childView;
    if ( options.onClose && typeof options.onClose === 'function' ) {
      this.onClose = options.onClose;
    }
    if ( options.onClosed && typeof options.onClosed === 'function' ) {
      this.onClose = options.onClosed;
    }
  },

  onRender : function () {
    this.ui.title.text( this.model.get( 'title' ) );
    this.showChildView( 'body', this.childView );
  },

  onClose : function () { return true; },

  onClosed : function () {}

} );
