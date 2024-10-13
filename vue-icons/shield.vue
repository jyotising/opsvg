
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21648)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M3 4.12782L12.0043 1.5L21 4.12782V9.51684C21 15.1811 17.3751 20.2097 12.0013 22.0003C6.62604 20.2097 3 15.18 3 9.51435V4.12782Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21648">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'shield',
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
  