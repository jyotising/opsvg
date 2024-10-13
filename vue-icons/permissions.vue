
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M10 5H3C2.44771 5 2 5.4477 2 6V19C2 19.5523 2.44771 20 3 20H21C21.5523 20 22 19.5523 22 19V17.75" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M5 11.5H9" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M5 15.5H17" stroke="#333333" strokeLinecap="round" strokeWidth="2"/>
	<path d="M17 11C18.6569 11 20 9.65685 20 8C20 6.34315 18.6569 5 17 5C15.3431 5 14 6.34315 14 8C14 9.65685 15.3431 11 17 11Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M22 14.2093C21.0234 12.3011 18.9999 11 16.9999 11C14.9999 11 14.0035 11.5664 12.9751 12.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'permissions',
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
  