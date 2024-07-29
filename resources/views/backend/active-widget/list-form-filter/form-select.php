<?php
$choice = $emptyValue + $choice;
array_walk($choice, function(&$v, $k)use($DOM, $domOption){
	$v = x__($v);
	$DOM->append($domOption($k, $v));
});

$DOM->addClass($DOM->multiple() ? 'js-select-multiple' : 'js-select-single');
!$DOM->autocomplete && $DOM->autocomplete('off');
?>

<div class="b-formGroup -select">
	<?if($DOMLabel->get(0)):?>
    <div class="b-formGroup__labelWrapper">
		<?=$DOMLabel->addClass('b-formGroup__label')?>
		<?if(!empty($tooltip)):?>
            <div class="b-tooltip js-tooltip t-right-top" title="<?=nl2br(htmlspecialchars($tooltip, ENT_COMPAT, \Kcms\Core\UTF8::CHARSET))?>"></div>
		<?endif;?>
    </div>
	<?endif;?>
	<div class="b-formGroup__fieldWrapper">
		<?=$DOM?>
	</div>
</div>

