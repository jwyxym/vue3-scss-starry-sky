<template>
	<div class="starry-sky" aria-hidden="true">
		<div v-for="_ in new Array(3)" :key="_">
			<div v-for="tile in new Array(3)" :key="tile" />
		</div>
	</div>
</template>
<style scoped lang="scss">
@use "sass:math";

@function star($n) {
	$result: #{math.random(100)}vw #{math.random(100)}vh 1px #fff;

	@for $i from 2 through $n {
		$result: #{$result}, #{math.random(100)}vw #{math.random(100)}vh 1px #fff;
	}

	@return $result;
}

@keyframes moveup {
	to {
		transform: translate(-100vw, -100vh);
	}
}

.starry-sky {
	background: linear-gradient(#1c1a2e, #2f2434);
	inset: 0;
	overflow: hidden;
	position: fixed;

	$time: 100s;
	$count: 600;

	@for $nth from 1 through 3 {
		$time: math.floor(math.div($time, 2));
		$count: math.floor(math.div($count, 2));

		> div:nth-of-type(#{$nth}) {
			animation: moveup $time linear infinite;
			border-radius: 50%;
			box-shadow: star($count);
			height: #{$nth}px;
			position: fixed;
			width: #{$nth}px;

			> div {
				border-radius: inherit;
				box-shadow: inherit;
				height: inherit;
				position: inherit;
				width: inherit;
			}

			> div:first-of-type {
				transform: translateY(100vh);
			}

			> div:nth-last-of-type(2) {
				transform: translateX(100vw);
			}

			> div:last-of-type {
				transform: translate(100vw, 100vh);
			}
		}
	}
}
</style>
