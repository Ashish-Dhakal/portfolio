<!DOCTYPE html>
<html lang="ne">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>  - News Portal</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#006064',
          }
        }
      }
    }
  </script>
  <link href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css" rel="stylesheet">
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Mukta:wght@300;400;500;600;700&display=swap');
    body {
      font-family: 'Mukta', sans-serif;
    }
  </style>
</head>
<body class="min-h-screen bg-white">
  <!-- Header -->
  <header class="border-b">
    <div class="container mx-auto px-4 py-3">
      <div class="flex items-center justify-between">
        <div class="flex items-center space-x-4">
          <a href="/" class="flex items-center">
            <img src="../img/news-logo.png" alt="news" class="h-10 w-auto">
          </a>
          <div class="hidden md:flex text-xs text-gray-500">
            <span id="current-date">२०८१ जेठ ३०</span>
          </div>
        </div>
        <div class="flex items-center space-x-2">
          <div class="relative hidden md:block">
            <input type="search" placeholder="खोज्नुहोस्..." class="w-[200px] h-8 text-sm border rounded-md px-3 py-1 focus:outline-none focus:ring-1 focus:ring-primary">
            <i class="bx bx-search absolute right-2 top-1/2 -translate-y-1/2 text-gray-500"></i>
          </div>
          <button class="md:hidden p-1">
            <i class="bx bx-search text-xl"></i>
          </button>
        </div>
      </div>
      <nav class="mt-2">
        <ul class="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm font-medium">
          <li>
            <a href="/" class="hover:text-primary">गृहपृष्ठ</a>
          </li>
          <li>
            <a href="/politics" class="hover:text-primary">राजनीति</a>
          </li>
          <li>
            <a href="/society" class="hover:text-primary">समाज</a>
          </li>
          <li>
            <a href="/economy" class="hover:text-primary">अर्थ</a>
          </li>
          <li>
            <a href="/international" class="hover:text-primary">अन्तर्राष्ट्रिय</a>
          </li>
          <li>
            <a href="/sports" class="hover:text-primary">खेलकुद</a>
          </li>
          <li>
            <a href="/entertainment" class="hover:text-primary">मनोरञ्जन</a>
          </li>
          <li>
            <a href="/opinion" class="hover:text-primary">विचार</a>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main class="container mx-auto px-4 py-6">
    <div class="grid grid-cols-1 gap-6 lg:grid-cols-12">
      <!-- Main content area -->
      <div class="lg:col-span-9">
        <!-- Featured news section -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
          <!-- Large featured news -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-64 md:h-80 overflow-hidden">
                <img 
                  src="https://jwalakhabar.com/wp-content/uploads/2025/06/IMG_20250613_121801.jpg" 
                  alt="कर्णालीमा स्वास्थ्यकर्मीको हड्तालले १ हप्तादेखि स्वास्थ्य सेवा ठप्प" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  समाज
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 text-xl md:text-2xl font-bold leading-tight group-hover:text-primary">
                  कर्णालीमा स्वास्थ्यकर्मीको हड्तालले १ हप्तादेखि स्वास्थ्य सेवा ठप्प
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  कर्णालीमा स्वास्थ्यकर्मीको हड्तालले १ हप्तादेखि स्वास्थ्य सेवा ठप्प भएको छ। स्वास्थ्यकर्मीहरूले आफ्ना माग पूरा नभएसम्म आन्दोलन जारी राख्ने बताएका छन्।
                </p>
              </div>
            </a>
          </div>
          
          <!-- Medium featured news -->
          <div class="space-y-4">
            <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
              <a href="#" class="block">
                <div class="relative h-48 overflow-hidden">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNTC1KTo-D3SRXxPI8SkSGCbS6ZQuGIPFt6j6muKNk7JBPWNH3BElwprvS3b32qrdHTqY&usqp=CAU" 
                    alt="पाँच दिनदेखि बेपत्ता बालकको खोजी तीव्र" 
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  >
                  <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                    समाज
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="mb-2 text-lg font-bold leading-tight group-hover:text-primary">
                    पाँच दिनदेखि बेपत्ता बालकको खोजी तीव्र
                  </h3>
                  <div class="mb-2 flex items-center text-xs text-gray-500">
                    <i class="bx bx-calendar mr-1 text-sm"></i>
                    <span>२०८१ जेठ ३०</span>
                  </div>
                  <p class="line-clamp-3 text-sm text-gray-600">
                    पाँच दिनदेखि बेपत्ता बालकको खोजी तीव्र पारिएको छ। प्रहरीले खोजी कार्यलाई तीव्रता दिएको जनाएको छ।
                  </p>
                </div>
              </a>
            </div>
            
            <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
              <a href="#" class="block">
                <div class="relative h-48 overflow-hidden">
                  <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQ52He3ha6YG-ZB4ibupDJsNtFOfdLx5_kKg&s" 
                    alt="अमेरिकी राष्ट्रपति चुनावमा ट्रम्प र बाइडेनबीच कडा प्रतिस्पर्धा" 
                    class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  >
                  <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                    अन्तर्राष्ट्रिय
                  </div>
                </div>
                <div class="p-4">
                  <h3 class="mb-2 text-lg font-bold leading-tight group-hover:text-primary">
                    अमेरिकी राष्ट्रपति चुनावमा ट्रम्प र बाइडेनबीच कडा प्रतिस्पर्धा
                  </h3>
                  <div class="mb-2 flex items-center text-xs text-gray-500">
                    <i class="bx bx-calendar mr-1 text-sm"></i>
                    <span>२०८१ जेठ ३०</span>
                  </div>
                  <p class="line-clamp-3 text-sm text-gray-600">
                    अमेरिकी राष्ट्रपति चुनावमा ट्रम्प र बाइडेनबीच कडा प्रतिस्पर्धा हुने देखिएको छ। दुवै पक्षले आफ्नो प्रचार अभियानलाई तीव्रता दिएका छन्।
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>

        <hr class="my-6 border-gray-200">

        <!-- News grid -->
        <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <!-- News Card 1 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://hamrakura.com/uploads/news/images/nepal-cricket-2024a.jpg" 
                  alt="नेपाली क्रिकेट टिमले श्रीलंकासँग खेल्ने" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  खेलकुद
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  नेपाली क्रिकेट टिमले श्रीलंकासँग खेल्ने
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  नेपाली राष्ट्रिय क्रिकेट टिमले श्रीलंकासँग मैत्रीपूर्ण खेल खेल्ने भएको छ। यो खेल आगामी महिना हुने जनाइएको छ।
                </p>
              </div>
            </a>
          </div>

          <!-- News Card 2 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://nepalbahas.prixacdn.net/media/albums/jhadap____8_WD34AMMZbQ.jpg" 
                  alt="काठमाडौंमा प्रदर्शनकारी र प्रहरीबीच झडप" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  समाज
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  काठमाडौंमा प्रदर्शनकारी र प्रहरीबीच झडप
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  काठमाडौंमा प्रदर्शनकारी र प्रहरीबीच झडप भएको छ। प्रदर्शनकारीहरूले सरकारको नीतिको विरोध गरिरहेका छन्।
                </p>
              </div>
            </a>
          </div>

          <!-- News Card 3 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://himalpress.com/wp-content/uploads/2023/11/IMG_6465.jpg" 
                  alt="नेपालमा पर्यटक आगमन बढ्दो" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  अर्थ
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  नेपालमा पर्यटक आगमन बढ्दो
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  नेपालमा पर्यटक आगमन बढ्दो क्रममा रहेको छ। पछिल्लो तथ्यांक अनुसार गत वर्षको तुलनामा २०% ले वृद्धि भएको छ।
                </p>
              </div>
            </a>
          </div>

          <!-- News Card 4 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://newsofnepal.com/wp-content/uploads/2022/01/education-ministry-0232020064712-768x392.jpg" 
                  alt="नयाँ शैक्षिक नीति लागू हुँदै" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  शिक्षा
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  नयाँ शैक्षिक नीति लागू हुँदै
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  सरकारले नयाँ शैक्षिक नीति लागू गर्ने तयारी गरेको छ। यो नीतिले शिक्षा क्षेत्रमा आमूल परिवर्तन ल्याउने विश्वास गरिएको छ।
                </p>
              </div>
            </a>
          </div>

          <!-- News Card 5 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://www.rangasansar.com/uploads/posts/1681466794Nambari-Sun_(1).jpg" 
                  alt="नेपाली चलचित्र क्षेत्रमा नयाँ प्रतिभाहरू" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  मनोरञ्जन
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  नेपाली चलचित्र क्षेत्रमा नयाँ प्रतिभाहरू
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  नेपाली चलचित्र क्षेत्रमा नयाँ प्रतिभाहरू देखिन थालेका छन्। युवा निर्देशकहरूले फरक शैलीका फिल्म निर्माण गरिरहेका छन्।
                </p>
              </div>
            </a>
          </div>

          <!-- News Card 6 -->
          <div class="group overflow-hidden rounded-md border transition-all hover:shadow-md">
            <a href="#" class="block">
              <div class="relative h-48 overflow-hidden">
                <img 
                  src="https://assets-cdn-api.ekantipur.com/thumb.php?src=https://assets-cdn.ekantipur.com/uploads/source/news/kantipur/2022/third-party/deng-1392022050153-1000x0.jpg&w=1001&h=0" 
                  alt="नेपालमा डेंगु रोगको प्रकोप बढ्दो" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute left-2 top-2 rounded bg-primary px-2 py-1 text-xs font-medium text-white">
                  स्वास्थ्य
                </div>
              </div>
              <div class="p-4">
                <h3 class="mb-2 line-clamp-2 text-lg font-bold leading-tight group-hover:text-primary">
                  नेपालमा डेंगु रोगको प्रकोप बढ्दो
                </h3>
                <div class="mb-2 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
                <p class="line-clamp-3 text-sm text-gray-600">
                  नेपालमा डेंगु रोगको प्रकोप बढ्दो क्रममा रहेको छ। स्वास्थ्य मन्त्रालयले सावधानी अपनाउन आग्रह गरेको छ।
                </p>
              </div>
            </a>
          </div>
        </div>

        <hr class="my-6 border-gray-200">

        <!-- Video section -->
        <div>
          <h2 class="mb-4 text-xl font-bold">भिडियो ग्यालेरी</h2>
          <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <!-- Video Card 1 -->
            <a href="#" class="group block overflow-hidden rounded-md">
              <div class="relative aspect-video overflow-hidden">
                <img 
                  src="https://gorkhapatraonline.com/storage/media/174178/tourist.jpg" 
                  alt="नेपालको पर्यटन क्षेत्रमा नयाँ पहल" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/50">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-white transition-transform group-hover:scale-110">
                    <i class="bx bx-play-circle text-2xl"></i>
                  </div>
                </div>
              </div>
              <h3 class="mt-2 line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                नेपालको पर्यटन क्षेत्रमा नयाँ पहल
              </h3>
            </a>

            <!-- Video Card 2 -->
            <a href="#" class="group block overflow-hidden rounded-md">
              <div class="relative aspect-video overflow-hidden">
                <img 
                  src="https://gorkhapatraonline.com/storage/editor/photos/shares/93.jpg" 
                  alt="काठमाडौंमा आयोजित सांस्कृतिक कार्यक्रम" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/50">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-white transition-transform group-hover:scale-110">
                    <i class="bx bx-play-circle text-2xl"></i>
                  </div>
                </div>
              </div>
              <h3 class="mt-2 line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                काठमाडौंमा आयोजित सांस्कृतिक कार्यक्रम
              </h3>
            </a>

            <!-- Video Card 3 -->
            <a href="#" class="group block overflow-hidden rounded-md">
              <div class="relative aspect-video overflow-hidden">
                <img 
                  src="https://www.halokhabar.com/uploads/news/images/65487653Hatetactor.jpeg" 
                  alt="नेपाली कृषि क्षेत्रमा आधुनिकीकरण" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/50">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-white transition-transform group-hover:scale-110">
                    <i class="bx bx-play-circle text-2xl"></i>
                  </div>
                </div>
              </div>
              <h3 class="mt-2 line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                नेपाली कृषि क्षेत्रमा आधुनिकीकरण
              </h3>
            </a>

            <!-- Video Card 4 -->
            <a href="#" class="group block overflow-hidden rounded-md">
              <div class="relative aspect-video overflow-hidden">
                <img 
                  src="https://www.himaliawaj.com/wp-content/uploads/2023/03/Tourist.jpg" 
                  alt="हिमाली क्षेत्रमा पर्यटकहरूको आगमन" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
                <div class="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity group-hover:bg-black/50">
                  <div class="flex h-12 w-12 items-center justify-center rounded-full bg-primary/80 text-white transition-transform group-hover:scale-110">
                    <i class="bx bx-play-circle text-2xl"></i>
                  </div>
                </div>
              </div>
              <h3 class="mt-2 line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                हिमाली क्षेत्रमा पर्यटकहरूको आगमन
              </h3>
            </a>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="lg:col-span-3">
        <div class="rounded-lg border p-4">
          <h3 class="mb-4 text-lg font-bold">ताजा समाचार</h3>
          <div class="space-y-4">
            <!-- Sidebar News 1 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://darpandainik.com/images/blog/68c66452811e5_sudhilalaolakoakoaks.JPG" 
                  alt="प्रधानमन्त्रीद्वारा नयाँ योजना घोषणा" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  प्रधानमन्त्रीद्वारा नयाँ योजना घोषणा
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Sidebar News 2 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://corporatenepalcdn.prixacdn.net/media/gallery_folder/1439316165_SAJA_BUS_130407_18_20130422095023_n0fhMeaZAt..jpg" 
                  alt="काठमाडौंमा सार्वजनिक यातायात व्यवस्थापन सुधार हुँदै" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  काठमाडौंमा सार्वजनिक यातायात व्यवस्थापन सुधार हुँदै
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Sidebar News 3 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://nepalkhabar.prixacdn.net/media/albums/nep-ban_elec_samjhauta_cgrjTxb6ZL.jpg" 
                  alt="नेपाल र भारतबीच नयाँ व्यापार सम्झौता" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  नेपाल र भारतबीच नयाँ व्यापार सम्झौता
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Sidebar News 4 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://urjakhabar.com/uploads/Glacier-Himtal%20UK%201.jpg" 
                  alt="हिमालय क्षेत्रमा जलवायु परिवर्तनको असर बढ्दो" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  हिमालय क्षेत्रमा जलवायु परिवर्तनको असर बढ्दो
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Sidebar News 5 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://sagarmathapana.com/wp-content/uploads/2025/05/IMG_3415.jpeg" 
                  alt="नेपाली कलाकारले अन्तर्राष्ट्रिय पुरस्कार जिते" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  नेपाली कलाकारले अन्तर्राष्ट्रिय पुरस्कार जिते
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="mt-6 rounded-lg border p-4">
          <h3 class="mb-4 text-lg font-bold">लोकप्रिय समाचार</h3>
          <div class="space-y-4">
            <!-- Popular News 1 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://www.nepalitwa.com/uploads/posts/Untitled-design-(45)-1696693430.png" 
                  alt="नेपाली खेलाडीले एसियाली खेलकुदमा स्वर्ण पदक जिते" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  नेपाली खेलाडीले एसियाली खेलकुदमा स्वर्ण पदक जिते
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Popular News 2 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://www.onlinekhabar.com/wp-content/uploads/2025/07/Kathmandu-Metro-Rail-Plan-by-Dr-Binodlal-Amatya-UK.jpg" 
                  alt="काठमाडौंमा नयाँ मेट्रो रेल प्रणाली निर्माण हुने" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  काठमाडौंमा नयाँ मेट्रो रेल प्रणाली निर्माण हुने
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>

            <!-- Popular News 3 -->
            <a href="#" class="group flex gap-3">
              <div class="relative h-16 w-20 flex-shrink-0 overflow-hidden rounded-md">
                <img 
                  src="https://www.onlinekhabar.com/wp-content/uploads/2023/11/Woman-Film-Festival1.jpg" 
                  alt="नेपालमा पहिलो पटक अन्तर्राष्ट्रिय फिल्म फेस्टिभल" 
                  class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                >
              </div>
              <div class="flex-1">
                <h4 class="line-clamp-2 text-sm font-medium leading-tight group-hover:text-primary">
                  नेपालमा पहिलो पटक अन्तर्राष्ट्रिय फिल्म फेस्टिभल
                </h4>
                <div class="mt-1 flex items-center text-xs text-gray-500">
                  <i class="bx bx-calendar mr-1 text-sm"></i>
                  <span>२०८१ जेठ ३०</span>
                </div>
              </div>
            </a>
          </div>
        </div>

        <div class="mt-6">
          <div class="rounded-lg bg-gray-100 p-4">
            <h3 class="mb-2 text-lg font-bold">न्युजलेटर</h3>
            <p class="mb-4 text-sm text-gray-600">ताजा समाचार प्राप्त गर्न हाम्रो न्युजलेटरमा सदस्यता लिनुहोस्</p>
            <div class="space-y-2">
              <input type="email" placeholder="इमेल ठेगाना" class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-primary">
              <button class="w-full px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors">
                सदस्यता लिनुहोस्
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>

  <!-- Footer -->
  <footer class="bg-gray-100 py-8">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 gap-8 md:grid-cols-4">
        <div>
          <img src="./news-logo.png" alt=" " class="h-10 w-auto">
          <p class="mt-4 text-sm text-gray-600">
              नेपालको अग्रणी समाचार पोर्टल हो। हामी सत्य, तथ्य र निष्पक्ष समाचार प्रदान गर्छौं।
          </p>
        </div>
        <div>
          <h4 class="mb-4 font-bold">विभागहरू</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="/politics" class="text-gray-600 hover:text-primary">
                राजनीति
              </a>
            </li>
            <li>
              <a href="/society" class="text-gray-600 hover:text-primary">
                समाज
              </a>
            </li>
            <li>
              <a href="/economy" class="text-gray-600 hover:text-primary">
                अर्थ
              </a>
            </li>
            <li>
              <a href="/international" class="text-gray-600 hover:text-primary">
                अन्तर्राष्ट्रिय
              </a>
            </li>
            <li>
              <a href="/sports" class="text-gray-600 hover:text-primary">
                खेलकुद
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-4 font-bold">उपयोगी लिंकहरू</h4>
          <ul class="space-y-2 text-sm">
            <li>
              <a href="/about" class="text-gray-600 hover:text-primary">
                हाम्रो बारेमा
              </a>
            </li>
            <li>
              <a href="/contact" class="text-gray-600 hover:text-primary">
                सम्पर्क
              </a>
            </li>
            <li>
              <a href="/privacy" class="text-gray-600 hover:text-primary">
                गोपनीयता नीति
              </a>
            </li>
            <li>
              <a href="/terms" class="text-gray-600 hover:text-primary">
                नियम र शर्तहरू
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 class="mb-4 font-bold">सम्पर्क</h4>
          <address class="not-italic text-sm text-gray-600">
            <p>काठमाडौं, नेपाल</p>
            <p class="mt-2">फोन: +977 9863379537</p>
            <p>इमेल: ashishdhakal433@gmail.com</p>
          </address>
        </div>
      </div>
      <div class="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-600">
        <p>© <span id="current-year">2025</span>  । सर्वाधिकार सुरक्षित।</p>
      </div>
    </div>
  </footer>

  <script>
    // Set current date in Nepali format
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // You can add more JavaScript functionality here
    // For example, mobile menu toggle, search functionality, etc.
  </script>
</body>
</html>