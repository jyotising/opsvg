
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20846)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M6.99895 9.3693L4 10.9614V22H20V2H6.99895V9.3693Z" fillRule="evenodd" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M10.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M16.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
		<path d="M13.5 6V9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20846">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'mini-sd-card',
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
  