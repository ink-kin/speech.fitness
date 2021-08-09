import{o as e,c as a,a as n}from"./app.e2261b09.js";const s='{"title":"Пакетное изменение изображений","description":"","frontmatter":{"title":"Пакетное изменение изображений","no_date":true,"no_comments":true},"headers":[{"level":2,"title":"Узнать размеры изображения","slug":"узнать-размеры-изображения"},{"level":3,"title":"Склейка нескольких картинок в один файл","slug":"скnейка-нескоnьких-картинок-в-один-файn"},{"level":3,"title":"Склеить 2 изображения в столбец 1х2 (по вертикали):","slug":"скnеить-2-изображения-в-стоnбец-1х2-по-вертикаnи"},{"level":3,"title":"Склеить 2 изображения в строку 2х1 (по горизонтали):","slug":"скnеить-2-изображения-в-строку-2х1-по-горизонтаnи"},{"level":3,"title":"Подписать каждое изображение в коллаже именем файла:","slug":"подписать-каждое-изображение-в-коnnаже-именем-файnа"},{"level":2,"title":"Изменение размеров изображений","slug":"изменение-размеров-изображений"},{"level":3,"title":"Растяжение гистограммы изображения (повышение цветовой чёткости)","slug":"растяжение-гистограммы-изображения-повышение-цветовой-чёткости"},{"level":3,"title":"Подмена цвета","slug":"подмена-цвета"},{"level":2,"title":"Оптимизация изображений","slug":"оптимизация-изображений"},{"level":3,"title":"jpegtran","slug":"jpegtran"},{"level":3,"title":"Для базового варианта оптимизации вызываем команду:","slug":"дnя-базового-варианта-оптимизации-вызываем-команду"},{"level":3,"title":"Progressive","slug":"progressive"},{"level":2,"title":"сохранит результат в файл min.pro.image.jpg","slug":"сохранит-резуnьтат-в-файn-min-pro-image-jpg"},{"level":3,"title":"Изменение качества","slug":"изменение-качества"},{"level":2,"title":"jpegoptim","slug":"jpegoptim"},{"level":2,"title":"PNG","slug":"png"}],"relativePath":"blog/paketnoe-izmenenie-izobrazhenij.md","lastUpdated":1628523186801}',i={},r=n('<h1 id="пакетное-изменение-размеров-изображений-images-resize"><a class="header-anchor" href="#пакетное-изменение-размеров-изображений-images-resize" aria-hidden="true">#</a> Пакетное изменение размеров изображений (images resize)</h1><div class="language-bash"><pre><code><span class="token keyword">for</span> <span class="token for-or-select variable">i</span> <span class="token keyword">in</span> <span class="token variable"><span class="token variable">`</span><span class="token function">ls</span><span class="token variable">`</span></span><span class="token punctuation">;</span> <span class="token keyword">do</span> convert -resize <span class="token string">&#39;x266&#39;</span> -quality <span class="token number">65</span> <span class="token variable">$i</span> x266q65_<span class="token variable">$i</span><span class="token punctuation">;</span> <span class="token keyword">done</span>\n</code></pre></div><p>В результате выполнения этой команды все изображения, находящиеся в текущем каталоге, будут конвертированы в картинки с высотой в 266 пикселей. Результат будет сохранет в той же папке новыми файлами с префиксом x266q65_Далее-Старое-Название-И-Расширение.</p><h2 id="узнать-размеры-изображения"><a class="header-anchor" href="#узнать-размеры-изображения" aria-hidden="true">#</a> Узнать размеры изображения</h2><p>По вертикали:</p><div class="language-bash"><pre><code><span class="token assign-left variable">height</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>identify -ping -format <span class="token string">&quot;%h&quot;</span> IMG_4450.JPG<span class="token variable">`</span></span>\n</code></pre></div><p>По горизонтали:</p><div class="language-bash"><pre><code><span class="token assign-left variable">width</span><span class="token operator">=</span><span class="token variable"><span class="token variable">`</span>identify -ping -format <span class="token string">&quot;%w&quot;</span> IMG_4450.JPG<span class="token variable">`</span></span>\n</code></pre></div><h3 id="скnейка-нескоnьких-картинок-в-один-файn"><a class="header-anchor" href="#скnейка-нескоnьких-картинок-в-один-файn" aria-hidden="true">#</a> Склейка нескольких картинок в один файл</h3><p>Склеить все изображения в директории в матрицу 2х2 по 4 изображения:</p><div class="language-bash"><pre><code>montage *.jpg -tile 2x2 -geometry +10+10 out.jpg\n</code></pre></div><h3 id="скnеить-2-изображения-в-стоnбец-1х2-по-вертикаnи"><a class="header-anchor" href="#скnеить-2-изображения-в-стоnбец-1х2-по-вертикаnи" aria-hidden="true">#</a> Склеить 2 изображения в столбец 1х2 (по вертикали):</h3><div class="language-bash"><pre><code>montage BMW_420d.jpg BMW_425d.jpg -tile 1x2 -geometry +10+10 BMW_xDrive.jpg\n</code></pre></div><h3 id="скnеить-2-изображения-в-строку-2х1-по-горизонтаnи"><a class="header-anchor" href="#скnеить-2-изображения-в-строку-2х1-по-горизонтаnи" aria-hidden="true">#</a> Склеить 2 изображения в строку 2х1 (по горизонтали):</h3><div class="language-bash"><pre><code>montage BMW_520d.jpg BMW_525d.jpg -tile 2x1 -geometry +10+10 BMW_M5.jpg\n</code></pre></div><h3 id="подписать-каждое-изображение-в-коnnаже-именем-файnа"><a class="header-anchor" href="#подписать-каждое-изображение-в-коnnаже-именем-файnа" aria-hidden="true">#</a> Подписать каждое изображение в коллаже именем файла:</h3><div class="language-bash"><pre><code>montage *.jpg -label %f -frame <span class="token number">10</span> -tile 2x2 -geometry +10+10 out.jpg\n</code></pre></div><ul><li>geometry +10+10 — белые поля вокруг каждого изображения, заданные в пикселях</li><li>frame 10 — 3D-рамка, пиксели</li><li>label %f — подпись</li></ul><h2 id="изменение-размеров-изображений"><a class="header-anchor" href="#изменение-размеров-изображений" aria-hidden="true">#</a> Изменение размеров изображений</h2><p><a href="/blog/convert_--help.html">См подробнее help по convert</a></p><div class="language-bash"><pre><code>convert hkers.png -adaptive-resize 500x guy_hkers_500x.png\n</code></pre></div><h3 id="растяжение-гистограммы-изображения-повышение-цветовой-чёткости"><a class="header-anchor" href="#растяжение-гистограммы-изображения-повышение-цветовой-чёткости" aria-hidden="true">#</a> Растяжение гистограммы изображения (повышение цветовой чёткости)</h3><p>Автоматический режим через normalize</p><div class="language-bash"><pre><code>convert <span class="token variable">$1</span> -normalize -sharpen <span class="token variable">$sharp</span> -quality <span class="token variable">$quality</span> -resize <span class="token variable">$newsize</span> <span class="token variable">$2</span>\n</code></pre></div><h3 id="подмена-цвета"><a class="header-anchor" href="#подмена-цвета" aria-hidden="true">#</a> Подмена цвета</h3><div class="language-bash"><pre><code>convert create-code.png -fuzz <span class="token number">0</span>% -fill <span class="token string">&#39;#39а&#39;</span> -opaque <span class="token string">&#39;#000&#39;</span> new-code.png\n</code></pre></div><ul><li>-opaque &#39;#000&#39; — какой цвет искать</li><li>-fill &#39;#39а&#39; — на какой подменять</li><li>-fuzz 0% — точность задания цвета (отклонение 0%, т.е. искать и подменять только точно совпадающий с #000 цветом)</li></ul><h2 id="оптимизация-изображений"><a class="header-anchor" href="#оптимизация-изображений" aria-hidden="true">#</a> Оптимизация изображений</h2><h3 id="jpegtran"><a class="header-anchor" href="#jpegtran" aria-hidden="true">#</a> jpegtran</h3><p>Командная строка программа jpegtran предоставляет несколько возможностей для переформатирования и перекодирования представления DCT коэффициентов, для преобразования фактических данных изображения и для отбрасывания вспомогательных данных в файлах JPEG, соответственно. Преобразования, касающиеся представления коэффициентов, включают:</p><ul><li>оптимизация уровня кодирования Хаффмана файла JPEG для увеличения сжатия,</li><li>преобразование между прогрессивным и последовательным форматами JPEG,</li><li>преобразование между кодированием Хаффмана и арифметическим кодированием на уровне энтропийного кодирования .</li></ul><p>Каждое из этих преобразований полностью без потерь и обратимо.</p><h3 id="дnя-базового-варианта-оптимизации-вызываем-команду"><a class="header-anchor" href="#дnя-базового-варианта-оптимизации-вызываем-команду" aria-hidden="true">#</a> Для базового варианта оптимизации вызываем команду:</h3><div class="language-bash"><pre><code>jpegtran -copy none -optimize -outfile min.image.jpg image.jpg\n</code></pre></div><p>сохранит оптимизированную копию в min.image.jpg</p><ul><li>copy none убирает все метаданные из исходного файла</li><li>optimize оптимизирует изображение</li></ul><h3 id="progressive"><a class="header-anchor" href="#progressive" aria-hidden="true">#</a> Progressive</h3><p>Для изменения формата на progressive следует использовать такую команду:</p><div class="language-bash"><pre><code>jpegtran **-progressive** -copy none -optimize -outfile min.pro.image.jpg image.jpg\n</code></pre></div><h2 id="сохранит-резуnьтат-в-файn-min-pro-image-jpg"><a class="header-anchor" href="#сохранит-резуnьтат-в-файn-min-pro-image-jpg" aria-hidden="true">#</a> сохранит результат в файл min.pro.image.jpg</h2><h3 id="изменение-качества"><a class="header-anchor" href="#изменение-качества" aria-hidden="true">#</a> Изменение качества</h3><p>Вы также можете указать степень сжатия, чтобы наглядно подобрать лучшее значение:</p><div class="language-bash"><pre><code>jpegtran **-quality <span class="token number">80</span>** -copy none -optimize -outfile min.pro.image.jpg image.jpg\n</code></pre></div><p>Пробуйте разные значения от 5 до 95.</p><h2 id="jpegoptim"><a class="header-anchor" href="#jpegoptim" aria-hidden="true">#</a> jpegoptim</h2><div class="language-bash"><pre><code>jpegoptim --quiet --strip-all --all-progressive --stdout <span class="token variable">$file_in</span> <span class="token operator">&gt;</span> <span class="token variable">$file_out</span>\n</code></pre></div><h2 id="png"><a class="header-anchor" href="#png" aria-hidden="true">#</a> PNG</h2><div class="language-bash"><pre><code>optipng -o7 -out automotive_logofeature-optipng.png automotive_logofeature.png\n</code></pre></div><div class="language-bash"><pre><code>advpng -z -4 -i <span class="token number">50</span> automotive_logofeature-advpng.png\n</code></pre></div><div class="language-bash"><pre><code>advdef -z -4 -i <span class="token number">50</span> automotive_logofeature-advdef.png\n</code></pre></div><div class="language-bash"><pre><code>pngcrush -brute -reduce automotive_logofeature.png automotive_logofeature-pngcrush.png\n</code></pre></div><div class="language-bash"><pre><code>pngnq -s <span class="token number">1</span> -v automotive_logofeature-pngnq.png\n</code></pre></div><div class="language-bash"><pre><code>pngquant --speed <span class="token number">1</span> --force automotive_logofeature-pngquant.png\n</code></pre></div><p>SVG batik-svgpp Batik SVG pretty printer — The SVG Pretty Printer lets developers «pretty-up» their SVG files and get their tabulations and other cosmetic parameters in order. It can also be used to modify the DOCTYPE declaration on SVG files</p><p>svgcleaner Пакетная очистка SVG-файлов от ненужной информации, утилита удаляет атрибуты, не участвующие в формировании конечного изображения, а задействованные атрибуты приводит к более компактному виду. Размер файла может быть уменьшен на 60%.</p>',55);i.render=function(n,s,i,p,l,t){return e(),a("div",null,[r])};export{s as __pageData,i as default};
