import { PostTemplateProps } from '.';

export default {
  settings: {
    id: '61fd5d62845ac9392828c858',
    blogName: 'New Programming',
    blogDescription:
      'Esse blog é voltado para os amantes de tecnologia que querem aprender sempre um pouco mais.',
    logo: {
      id: 'some-id',
      alternativeText: 'New Programming',
      url: '/assets/images/logo.jpg',
    },
    menuLink: [
      {
        id: '61fd600506f225328cbe0647',
        link: 'https://pt-br.reactjs.org/docs/hooks-effect.html',
        children: 'useEffect',
        newTab: true,
      },
    ],
    footerHtml: '<p>A footer paragraph</p>',
  },
  posts: [
    {
      id: '61fd5706925de013f4652773',
      slug: 'usando-effect-hook-hook-de-efeito',
      title: 'Usando Effect Hook (Hook de Efeito)',
      excerpt:
        'O Effect Hook (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais.',
      content:
        '<p><span style="color:rgb(0,0,0);">O </span><i>Effect Hook</i><span style="color:rgb(0,0,0);"> (Hook de Efeito) te permite executar efeitos colaterais em componentes funcionais:</span></p><pre><code class="language-plaintext">import React, { useState, useEffect } from \'react\';\nfunction Exemplo() {\n  const [count, setCount] = useState(0);\n\n  // Similar ao componentDidMount e componentDidUpdate:  useEffect(() =&gt; {    // Atualiza o titulo do documento usando a API do browser    document.title = `Você clicou ${count} vezes`;  });\n  return (\n    &lt;div&gt;\n      &lt;p&gt;Você clicou {count} vezes&lt;/p&gt;\n      &lt;button onClick={() =&gt; setCount(count + 1)}&gt;\n        Clique aqui\n      &lt;/button&gt;\n    &lt;/div&gt;\n  );\n}</code></pre><p>&nbsp;</p><p style="margin-left:0px;">Esse trecho de código é baseado no <a href="https://pt-br.reactjs.org/docs/hooks-state.html">exemplo de contador da página anterior</a>, mas nós adicionamos uma nova funcionalidade a ele: nós definimos o titulo do documento para ser uma mensagem customizada que inclua o número de cliques.</p><p style="margin-left:0px;">Buscar dados, configurar uma subscription, e mudar o DOM manualmente dentro dos componentes React são exemplos de efeitos colaterais. Esteja você acostumado ou não a chamar essas operações de “efeitos colaterais” (ou somente “efeitos”), você provavelmente já usou eles em seus componentes antes.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;"><strong>Dica</strong></p><p style="margin-left:0px;">Se você está familiarizado com os métodos do ciclo de vida do React, você pode pensar no Hook <code>useEffect</code> como <code>componentDidMount</code>, <code>componentDidUpdate</code>, e <code>componentWillUnmount</code> combinados.</p><p style="margin-left:0px;">&nbsp;</p><p style="margin-left:0px;">Existem dois tipos comuns de efeitos colaterais nos componentes React: aqueles que não precisam de limpeza, e aqueles que precisam. Vamos ver as suas diferenças mais detalhadamente.</p><h2 style="margin-left:0px;">&nbsp;</h2><figure class="media"><oembed url="https://www.youtube.com/watch?v=jcc9T-5inrk"></oembed></figure>',
      allowComments: true,
      cover: {
        id: '61fd5673925de013f4652772',
        alternativeText: '',
        url: 'https://res.cloudinary.com/project-cdn/image/upload/v1643992684/use_Effect_hook_62405844a5.png',
      },
      categories: [
        {
          id: '61fd538bf6fd1926a0820a03',
          displayName: 'React',
          slug: 'react',
        },
      ],
      tags: [
        {
          id: '61fd5394f6fd1926a0820a04',
          displayName: 'useReducer',
          slug: 'use-effect',
        },
      ],
      author: {
        id: '61fd537ef6fd1926a0820a02',
        displayName: 'LuanMateus',
        slug: 'luan-mateus',
      },
    },
  ],
} as PostTemplateProps;
