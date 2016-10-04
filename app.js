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
var modal3 = new ModalView( {
  template : '#modal-tmpl3',
  model : new Backbone.Model( { title : 'Authtorization' } ),
  childView : new Mn.ItemView( { template : '#modal-body' } )
} );

document.body.appendChild( modal.render().el );
document.body.appendChild( modal1.render().el );
document.body.appendChild( modal2.render().el );
document.body.appendChild( modal3.render().el );
