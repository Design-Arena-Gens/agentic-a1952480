'use client';

import { useState } from 'react';
import { Sparkles, TrendingUp, Video, Instagram, Youtube, Zap, DollarSign, BarChart3, Lightbulb, Copy, Check } from 'lucide-react';

interface ContentIdea {
  title: string;
  description: string;
  platform: string;
  hashtags: string[];
  caption: string;
  hooks: string[];
}

export default function Home() {
  const [niche, setNiche] = useState('');
  const [platform, setPlatform] = useState('instagram');
  const [contentType, setContentType] = useState('reel');
  const [ideas, setIdeas] = useState<ContentIdea[]>([]);
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const generateIdeas = () => {
    setLoading(true);

    setTimeout(() => {
      const generatedIdeas: ContentIdea[] = [
        {
          title: `Top 5 ${niche} Products That Changed My Life`,
          description: `Create a showcase video highlighting the best ${niche} products you've personally tested. Include before/after results, honest reviews, and your exclusive affiliate discount codes.`,
          platform: platform,
          hashtags: [`#${niche}`, '#AffiliateMarketing', '#ProductReview', '#MustHave', '#Recommended', '#TrendingNow'],
          caption: `🔥 You NEED to see these ${niche} game-changers! I've tested dozens of products and these 5 actually delivered results. Swipe to see which one shocked me the most 👉\n\n💰 Use my exclusive link in bio for special discounts!\n\n❤️ Save this for later and share with someone who needs it!\n\n#${niche} #AffiliateMarketing #ProductReview`,
          hooks: [
            `"Stop wasting money on ${niche} products that don't work..."`,
            `"I tried 50 ${niche} products so you don't have to"`,
            `"The ${niche} industry doesn't want you to know this..."`,
            `"POV: You finally found ${niche} products that actually work"`
          ]
        },
        {
          title: `${niche} Mistakes You're Making (And How to Fix Them)`,
          description: `Educational content that addresses common problems in your niche, then naturally introduces affiliate products as solutions. This builds trust while promoting products.`,
          platform: platform,
          hashtags: [`#${niche}Tips`, '#LifeHacks', '#Tutorial', '#HowTo', '#LearnWithMe', '#Educational'],
          caption: `❌ Making these ${niche} mistakes? Here's how to fix them:\n\n1️⃣ [Problem] → [Solution with affiliate product]\n2️⃣ [Problem] → [Solution with affiliate product]\n3️⃣ [Problem] → [Solution with affiliate product]\n\n🔗 Link in bio for the products that saved me!\n\nWhich mistake were YOU making? Comment below! 👇\n\n#${niche} #Mistakes #Tutorial`,
          hooks: [
            `"Are you making these ${niche} mistakes?"`,
            `"This ${niche} mistake cost me $1000..."`,
            `"Everyone gets ${niche} wrong until they learn this"`,
            `"The #1 ${niche} mistake beginners make"`
          ]
        },
        {
          title: `My ${niche} Journey: From Zero to Results`,
          description: `Share your authentic transformation story using products from your niche. People connect with stories, making this perfect for building trust and driving affiliate sales.`,
          platform: platform,
          hashtags: [`#Transformation`, `#${niche}Journey`, '#MyStory', '#Motivation', '#Success', '#BeforeAndAfter'],
          caption: `My ${niche} journey wasn't easy... but these products made ALL the difference 💪\n\n📍 Where I started: [describe problem]\n📍 What I tried: [mention struggles]\n📍 What finally worked: [introduce affiliate products]\n📍 Where I am now: [show results]\n\n🎯 Ready to start YOUR journey? All products linked in bio!\n\nDrop a 🔥 if this motivated you!\n\n#${niche} #Transformation`,
          hooks: [
            `"I wish I knew about ${niche} sooner..."`,
            `"My ${niche} transformation in 60 seconds"`,
            `"This ${niche} method changed everything for me"`,
            `"Before vs After: My ${niche} journey"`
          ]
        },
        {
          title: `Budget vs Premium ${niche} Products - What's Worth It?`,
          description: `Compare different price points of products in your niche. This attracts both budget-conscious viewers and those seeking premium options, maximizing your audience reach.`,
          platform: platform,
          hashtags: [`#${niche}Review`, '#BudgetFriendly', '#Premium', '#Comparison', '#Worth It', '#SmartShopping'],
          caption: `Budget vs Premium ${niche} products - I tested them all! 💸\n\n💵 Budget Option: [product + pros/cons]\n💎 Premium Option: [product + pros/cons]\n🏆 Best Value: [product + why]\n\n🔗 All affiliate links in bio (some with exclusive discounts!)\n\nWhich would YOU choose? Budget or Premium? 👇\n\n#${niche} #ProductComparison`,
          hooks: [
            `"Is the premium ${niche} product worth 5x the price?"`,
            `"Cheap vs Expensive ${niche}: The truth"`,
            `"You don't need expensive ${niche} products for great results"`,
            `"Testing budget ${niche} products under $50"`
          ]
        },
        {
          title: `${niche} Routine That Makes Me $XXX/Month`,
          description: `Share your daily/weekly routine using affiliate products. Frame it around the results you achieve, making viewers want to replicate your success.`,
          platform: platform,
          hashtags: [`#${niche}Routine`, '#DailyRoutine', '#Lifestyle', '#Success', '#MoneyMaking', '#Entrepreneur'],
          caption: `My ${niche} routine that helps me earn $XXX/month as an affiliate 📈\n\n🌅 Morning: [product/routine]\n☀️ Midday: [product/routine]\n🌙 Evening: [product/routine]\n\n💡 The secret? Consistency + the RIGHT tools!\n\n🛒 Shop my full routine via link in bio\n\nWant to start your own ${niche} business? Save this post!\n\n#${niche} #Routine #AffiliateMarketing`,
          hooks: [
            `"My ${niche} routine that makes me money while I sleep"`,
            `"Watch me use my favorite ${niche} products"`,
            `"Get ready with me + my ${niche} essentials"`,
            `"The ${niche} routine that pays for itself"`
          ]
        }
      ];

      setIdeas(generatedIdeas);
      setLoading(false);
    }, 1500);
  };

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Sparkles className="w-12 h-12 text-purple-600 dark:text-purple-400 mr-2" />
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 bg-clip-text text-transparent">
              AI Affiliate Hub
            </h1>
          </div>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4">
            Generate Viral Content Ideas & Maximize Your Affiliate Earnings
          </p>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Instagram className="w-5 h-5 text-pink-500" />
              <span className="text-sm font-semibold">Instagram</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <Youtube className="w-5 h-5 text-red-500" />
              <span className="text-sm font-semibold">YouTube</span>
            </div>
            <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-full shadow-md">
              <DollarSign className="w-5 h-5 text-green-500" />
              <span className="text-sm font-semibold">Maximize Revenue</span>
            </div>
          </div>
        </header>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Lightbulb className="w-10 h-10 text-yellow-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Viral Content Ideas</h3>
            <p className="text-gray-600 dark:text-gray-300">AI-generated content ideas proven to drive engagement and conversions</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <TrendingUp className="w-10 h-10 text-green-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Smart Strategies</h3>
            <p className="text-gray-600 dark:text-gray-300">Data-driven marketing strategies tailored for Instagram & YouTube</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
            <Zap className="w-10 h-10 text-purple-500 mb-4" />
            <h3 className="text-xl font-bold mb-2">Instant Results</h3>
            <p className="text-gray-600 dark:text-gray-300">Get ready-to-use captions, hashtags, and hooks in seconds</p>
          </div>
        </div>

        {/* Content Generator */}
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 mb-12">
          <div className="flex items-center mb-6">
            <Video className="w-8 h-8 text-purple-600 dark:text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold">AI Content Generator</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className="block text-sm font-semibold mb-2">Your Niche</label>
              <input
                type="text"
                placeholder="e.g., Fitness, Tech, Beauty, Finance"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Platform</label>
              <select
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-500 focus:outline-none"
              >
                <option value="instagram">Instagram</option>
                <option value="youtube">YouTube</option>
                <option value="both">Both</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-semibold mb-2">Content Type</label>
              <select
                value={contentType}
                onChange={(e) => setContentType(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 dark:bg-gray-700 focus:border-purple-500 focus:outline-none"
              >
                <option value="reel">Reel/Short</option>
                <option value="video">Long Video</option>
                <option value="post">Post/Image</option>
                <option value="story">Story</option>
              </select>
            </div>
          </div>

          <button
            onClick={generateIdeas}
            disabled={!niche || loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <Sparkles className="animate-spin w-5 h-5 mr-2" />
                Generating Viral Ideas...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <Zap className="w-5 h-5 mr-2" />
                Generate Content Ideas
              </span>
            )}
          </button>
        </div>

        {/* Generated Ideas */}
        {ideas.length > 0 && (
          <div className="space-y-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-3xl font-bold">Your Viral Content Ideas</h2>
              <div className="flex items-center gap-2 bg-green-100 dark:bg-green-900 px-4 py-2 rounded-full">
                <BarChart3 className="w-5 h-5 text-green-600 dark:text-green-400" />
                <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                  {ideas.length} Ideas Generated
                </span>
              </div>
            </div>

            {ideas.map((idea, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 hover:shadow-xl transition">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex-1">
                    {idea.title}
                  </h3>
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {idea.platform}
                  </span>
                </div>

                <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                  {idea.description}
                </p>

                <div className="space-y-4">
                  {/* Hooks */}
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-yellow-500" />
                      Viral Hooks:
                    </h4>
                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg space-y-2">
                      {idea.hooks.map((hook, i) => (
                        <div key={i} className="flex items-start">
                          <span className="text-yellow-600 dark:text-yellow-400 mr-2">•</span>
                          <span className="text-gray-700 dark:text-gray-300">{hook}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Caption */}
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-bold flex items-center">
                        <Copy className="w-4 h-4 mr-2 text-blue-500" />
                        Ready-to-Use Caption:
                      </h4>
                      <button
                        onClick={() => copyToClipboard(idea.caption, index)}
                        className="flex items-center gap-2 bg-blue-100 dark:bg-blue-900 hover:bg-blue-200 dark:hover:bg-blue-800 px-3 py-1 rounded-lg text-sm font-semibold text-blue-600 dark:text-blue-400 transition"
                      >
                        {copiedIndex === index ? (
                          <>
                            <Check className="w-4 h-4" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="w-4 h-4" />
                            Copy
                          </>
                        )}
                      </button>
                    </div>
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">
                        {idea.caption}
                      </p>
                    </div>
                  </div>

                  {/* Hashtags */}
                  <div>
                    <h4 className="font-bold mb-2 flex items-center">
                      <TrendingUp className="w-4 h-4 mr-2 text-green-500" />
                      Trending Hashtags:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {idea.hashtags.map((tag, i) => (
                        <span
                          key={i}
                          className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tips Section */}
        <div className="mt-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl shadow-2xl p-8 text-white">
          <h2 className="text-3xl font-bold mb-6 flex items-center">
            <DollarSign className="w-8 h-8 mr-3" />
            Pro Tips for Affiliate Success
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">🎯 Be Authentic</h3>
              <p>Only promote products you genuinely use and believe in. Your audience can tell when you're authentic, leading to higher conversions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">📊 Track Your Links</h3>
              <p>Use UTM parameters and affiliate dashboards to understand which content drives the most sales. Double down on what works.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">🔄 Post Consistently</h3>
              <p>Success comes from consistency. Post 3-5 times per week on Instagram and 2-3 videos per week on YouTube for best results.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-3">💬 Engage With Comments</h3>
              <p>Reply to every comment in the first hour. Engagement signals to algorithms that your content is valuable, increasing reach.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-12 text-center text-gray-600 dark:text-gray-400">
          <p className="text-lg mb-2">
            Ready to start earning with affiliate marketing? Generate your first viral content ideas above!
          </p>
          <p className="text-sm">
            © 2025 AI Affiliate Hub - Helping creators monetize their passion
          </p>
        </footer>
      </div>
    </div>
  );
}
