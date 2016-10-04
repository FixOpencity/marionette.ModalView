'use strict';

var ModalView = Mn.LayoutView.extend( {

  className : 'modal',

  regions : { body : '.modal__body' },

  ui : { title : '.modal-header__title', close : '.modal-header__close' },

  events : {
    'click' : function ( e ) {
      if ( e.target === this.el || e.target === this.ui.close[0] ) {
        this.destroy();
      }
    }
  },

  initialize : function ( options ) { this.childView = options.childView; },

  onRender : function () {
    this.ui.title.text( this.model.get( 'title' ) );
    this.showChildView( 'body', this.childView );
  }

} );
