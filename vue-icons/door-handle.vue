
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_21010)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M15 2H4C3.44772 2 3 2.44772 3 3V21C3 21.5523 3.44772 22 4 22H15C15.5523 22 16 21.5523 16 21V3C16 2.44772 15.5523 2 15 2Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M7 17H12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M21 10V7H11.5002C11.0441 6.3928 10.3179 6 9.5 6C8.1193 6 7 7.1193 7 8.5C7 9.8807 8.1193 11 9.5 11C10.3179 11 11.0441 10.6072 11.5002 10H21Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_21010">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'door-handle',
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
  