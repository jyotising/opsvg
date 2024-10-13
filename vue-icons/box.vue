
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21789)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M20 6H4C3.44772 6 3 6.44772 3 7V20C3 20.5523 3.44772 21 4 21H20C20.5523 21 21 20.5523 21 20V7C21 6.44772 20.5523 6 20 6Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M8.97485 12.0042H14.9749" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M3 6.5L6.5 2.5H17.5L21 6.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21789">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'box',
      props: {
        width: {
          type: String,
          default: '24px'
        },
        height: {
          type: String,
          default: '24px'
        }
      }
    };
    </script>
  