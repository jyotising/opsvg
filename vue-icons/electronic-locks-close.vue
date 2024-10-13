
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M16 11H8C7.44772 11 7 11.4477 7 12V17C7 17.5523 7.44772 18 8 18H16C16.5523 18 17 17.5523 17 17V12C17 11.4477 16.5523 11 16 11Z" stroke="#333333" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.5 11V8.5C9.5 6.9659 10.6193 6 12 6C13.3807 6 14.5 6.9659 14.5 8.5V11" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M12 14V15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M3 9V15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M21 9V15" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'electronic-locks-close',
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
  