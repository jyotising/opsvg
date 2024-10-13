
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.5 6H9.5C8.67157 6 8 6.67157 8 7.5V13.5C8 14.3284 8.67157 15 9.5 15H20.5C21.3284 15 22 14.3284 22 13.5V7.5C22 6.67157 21.3284 6 20.5 6Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 9V12" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M18 9V12" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M18 6V3H12V6" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M22 18H6C5.4477 18 5 17.5523 5 17V5.5C5 4.94771 4.55229 4.5 4 4.5H2" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.5 21C8.67155 21 8 20.3285 8 19.5V18H11V19.5C11 20.3285 10.3285 21 9.5 21Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M18.5 21C17.6715 21 17 20.3285 17 19.5V18H20V19.5C20 20.3285 19.3285 21 18.5 21Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'transport',
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
  