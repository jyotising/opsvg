
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M15 7C16.3807 7 17.5 5.8807 17.5 4.5C17.5 3.11929 16.3807 2 15 2C13.6193 2 12.5 3.11929 12.5 4.5C12.5 5.8807 13.6193 7 15 7Z" stroke="#333333" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M5.5 10.5L8.5 8L12.5 9.5L11 12.5L14.5 15.5L15.5 19" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M11 12.5L8.5 16.5L4.5 16" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M3 22H20L22 17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
	<path d="M12.5 9.5L16.5 12L19.5 11" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="2" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'treadmill-one',
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
  