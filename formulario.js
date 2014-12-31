var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first();

function mostrarFormulario(){
	$form.slideToggle();
	return false;
}

function agregarPost(){
	var url = $url.val();
	var titulo = $titulo.val();
	var $clone = $post.clone();

	$clone.find('.titlo_item a');
		.text(titulo);
		.attr('href',url);
	$clone.hide();
	$list.prepend($clone);
	$clone.fadeIn();
	return false;
}

//Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost);

