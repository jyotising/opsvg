
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<path d="M15.8971 4H8.10275C7.44665 4 6.86669 4.42637 6.67099 5.0526L2.60851 18.0526C2.30667 19.0185 3.02827 20 4.04023 20H19.9596C20.9716 20 21.6932 19.0185 21.3914 18.0526L17.3289 5.0526C17.1332 4.42637 16.5532 4 15.8971 4Z" stroke="#333333" strokeWidth="2"/>
</svg>
    </template>
    <script>
    export default {
      name: 'trapezoid',
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
  