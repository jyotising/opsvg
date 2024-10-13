
    <template>
      <svg height="24" width="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
	<g clipPath="url(#clip0_2_20250)">
		<path d="M24 0H0V24H24V0Z" fill="white" fillOpacity="0.01"/>
		<path d="M9.5001 2H14.5001V7.66985L19.4103 4.83491L21.9103 9.16505L17.0001 12L21.9103 14.8349L19.4103 19.1651L14.5001 16.3301V22H9.5001V16.3301L4.58984 19.1651L2.08984 14.8349L7.0001 12L2.08984 9.16505L4.58984 4.83491L9.5001 7.66985V2Z" stroke="#333333" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
	</g>
	<defs>
		<clipPath id="clip0_2_20250">
			<rect height="24" width="24" fill="white"/>
		</clipPath>
	</defs>
</svg>
    </template>
    <script>
    export default {
      name: 'hexagon-strip',
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
  