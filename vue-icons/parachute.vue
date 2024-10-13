
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_19929)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M8.36364 12C9.57576 10.7879 10.7879 10.1818 12 10.1818C13.2121 10.1818 14.4242 10.7879 15.6364 12C17.0505 10.7879 18.1111 10.1818 18.8182 10.1818C19.5253 10.1818 20.5859 10.7879 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C3.41414 10.7879 4.47475 10.1818 5.18182 10.1818C5.88889 10.1818 6.9495 10.7879 8.36364 12Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M2 12L12 22L8.36364 12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
		<path d="M15.6364 12L12 22L22 12" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_19929">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'parachute',
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
  