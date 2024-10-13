
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M20.0001 9C18.5001 9 16.0003 9 15.0002 11.5C14 14 15.2501 16.25 16.5001 17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9 5H20" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M9.99996 2H19C19.5523 2 20 2.44771 20 3V12.1438C20 13.8599 19.1998 15.4777 17.832 16.5142C16.011 17.8941 13.5438 19.7544 12.5 20.5C10.75 21.75 7.49996 23 5.00011 20.5C2.50023 18 3.12528 14.7215 5.00021 13C6.87511 11.2785 8.99996 9.57595 8.99996 9.57595V3C8.99996 2.44771 9.44766 2 9.99996 2Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'socks',
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
  