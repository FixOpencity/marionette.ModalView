var modal = new ModalView( {
  template : '#modal-tmpl',
  model : new Backbone.Model( { title : 'Title' } ),
  childView : new Mn.ItemView( { template : '#modal-body' } )
} );
var modal1 = new ModalView( {
  template : '#modal-tmpl1',
  model : new Backbone.Model( { title : 'Title1' } ),
  childView : new Mn.ItemView( { template : '#modal-body' } )
} );
var modal2 = new ModalView( {
  template : '#modal-tmpl2',
  model : new Backbone.Model( { title : 'Title2' } ),
  childView : new Mn.ItemView( { template : '#modal-body' } )
} );

var Modal = ModalView.extend( {
  onClose : function () {
    console.log( 'My close' );
    return true;
  },
  onClosed : function () {
    console.log( 'My closed' );
  }
} );

var model = new Backbone.Model( { title : 'Title3' } );
var modal3 = new ModalView( {
  template : '#modal-tmpl3',
  model : model,
  childView : new Mn.ItemView( {
    template : '#modal-body',
    model : model
  } ),
  onClose : function () {
    console.log( 'My close from ctor' );
    return true;
  }
} );

document.body.appendChild( modal.render().el );
document.body.appendChild( modal1.render().el );
document.body.appendChild( modal2.render().el );
document.body.appendChild( modal3.render().el );
