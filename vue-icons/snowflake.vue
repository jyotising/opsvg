
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20428)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M12 2V22" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M3.3623 7L20.6828 17" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M3.35962 16.989L20.6407 7.01172" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M6 5L7.5 9.5L3 10.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M3 13.5L7.5 14.5L6 19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M18 5L16.5 9.5L21 10.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M21 13.5L16.5 14.5L18 19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M9 3.5L12 6.5L15 3.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M9 20.5L12 17.5L15 20.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20428">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'snowflake',
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
  