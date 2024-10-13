
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M4.50023 12L2.50007 10C2.50007 10 1.80031 12.3639 1.96216 13.7891C2.12401 15.2143 3.63662 16.2871 4.99995 15.5C6.3633 14.7129 22.0003 5 22.0003 5L17.5003 4L4.50023 12Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M13 6.50008L5.39895 5.69238L4 6.50008L7.49995 10.0001" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M14.5 22L12.5 19.5H21V17.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	<path d="M16 14L18 16.5H9.5V18.5" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'round-trip',
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
  