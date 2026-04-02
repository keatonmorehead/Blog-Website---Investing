// Blog posts data
const blogs = [
    {
        id: 'post-1',
        title: 'Blog 1 - Introduction',
        date: '2025-12-01',
        preview: 'An introduction to value investing, exploring why buying great companies at great prices has historically outperformed the market. Learn about the strategy, the data behind it, and why most investors don\'t follow it.',
        content: `
            <p class="disclaimer"><em><strong>Disclaimer:</strong> The content provided in this blog is for informational and educational purposes only and does not constitute financial, investment, or legal advice. I am not a registered investment advisor, and nothing herein should be construed as personalized recommendations to buy, sell, or hold any security. All investments involve risk, including the potential loss of principal, and past performance is not indicative of future results. I may hold positions in securities discussed, and my opinions are based on my own research and experiences. Always conduct your own due diligence and consult with a qualified financial professional before making any investment decisions. I assume no liability for any actions taken based on this information.</em></p>

            <h2>What is the point of this blog?</h2>
            <p>To educate my readers about financial markets, value investing, give stock picks and track my own portfolio over time.</p>
            <p>What do I believe in? What is my strategy? Why do I believe in this strategy? What evidence backs this? What will future blog posts be about?</p>
            <p>I aim to answer all these questions and more in this blog post with a deep discussion of the research, data, and different opinions out there in this counter-intuitive world of investing.</p>

            <h2>What Do I believe?</h2>
            <p>Price &amp; quality &gt; hype.</p>
            <p><strong><em>"Most investors typically don't take into consideration market pricing. In other words, they tend to identify what has been a great investment (e.g., a strongly performing company) as great, and they don't pay enough attention to its pricing, even though its pricing (whether it is cheap or expensive) is the most important thing."</em></strong> — Ray Dalio</p>
            <p>Most of what I believe and what these blog posts will be about can be summarized by the above quote. Through all my subjective experiences, education from different fields, experience investing in the market, and learning from those far wiser than I, I have seen that over time, buying great companies at a great price is the lowest risk but also highest return strategy of investing in the market. This is partially how Warren Buffet has returned 19.9% annually from 1965-2024, compared with the S&amp;P 500's 10.4%<sup>[1]</sup>. Warren Buffet's focus is more on buying "great businesses at a fair price," but early on he was influenced heavily by value investors like Benjamin Graham, and value investors today prove the outsized return potential still exists.</p>
            <p>And yet I'm sure you have rarely heard of this. What we mainly hear about is the next AI stock bound to make you a millionaire, the next quantum-computing penny stock to create generational wealth, the hottest crypto meme coin, or the fund that has 60 physics PhDs and 100 computer science quants running high frequency trading strategies.</p>
            <p>Why? How have investors like Warren Buffet and Benjamin Graham created such phenomenal returns compared to the market?</p>
            <p>First, I think it would be helpful to detail the breakdown of the US stock market across investor categories. Below is a breakdown as of June 2025.</p>
            <figure>
                <img src="images/Investor breakdown table.svg" alt="US equity market by investor category">
                <figcaption>Table 2: US equity market by investor category<sup>[2]</sup> (Q2 2025)</figcaption>
            </figure>
            <p>Note, the retail portion of the market (42%) includes financial advisors that have discretion over client funds and choose to stock pick themselves rather than invest in managed funds or ETFs. So the truly self-directed portion is lower, although no great estimates exist.</p>
            <p>The picture is clear. Majority of the money in global and US equity markets is professionally managed, either by financial advisors, large institutional funds, or foreign investors. A minority is truly self-directed.</p>
            <p>With this background, we can now answer these questions better. Why are speculative growth stocks what we mainly hear about? How have Buffet and Graham created such phenomenal returns compared to the market?</p>

            <h2>The Strategy</h2>
            <p>The strategy is referred to as "value investing," although with a simultaneous focus on quality companies, not just value for values sake. The goal is to buy super strong companies at a very attractive price. Companies that have strong balance sheets, generate lots of cash, have a defensible business, and are going to continue to grow over time, but have been beaten down in the stock market due to short-term bad news, general market downturns, or a variety of other reasons.</p>
            <p>Although extremely hard to determine what it is, every company has a theoretical "intrinsic value" which is equal to the present value of cash flows an investor will receive from that investment. In theory, this is what the stock price should be. The problem is that no one can precisely estimate these cash flows, although many try, so other factors start to determine the stock price. These factors are usually news and sentiment driven and have little or nothing to do with financial or business reasons. So, stock prices change every day for reasons unrelated to the core business and financial standing of the company, creating opportunities to buy great companies at an even better price.</p>
            <p>Let's imagine you have a friend, Bob. Bob, let's say, is always in need of cash and because you frequently have $50 bills and hate going to the bank, you are happy to give him cash in exchange for a Venmo payment. However, Bob tends to exaggerate things, cares too much about what others think, and is extremely irrational. So, every day, for reasons you and Bob can't fully explain, he buys these $50 bills for a different amount. One day he comes over in a panic and gives you $80 for the $50 bill, saying there's a shortage of them and how valuable they're going to be. Other days, he says your $50 bill is only worth $20 and can't give you anymore for it, citing a variety of reasons why.</p>
            <p>Then, what if I told you that Bob is the stock market, and your $50 bill is a stock. This happens every day. I mean really, think about it. Apple stock can swing up 5% in a day, and down 10% the next day, for no reason other than what others <em>think</em> it's worth, regardless of the actual financial situation. Apple has been around since 1976, did $416 billion in revenue in 2025, and has $55 billion in cash. Do you really think their financial situation changed by a matter of 5% and then 10% over the course of 2 days? Absolutely not.</p>
            <p>This is what value investing is. Buying a super solid company at a very attractive price, because the market <em>thinks</em> it isn't worth that much, despite financial security, future growth prospects, and a great management team in an industry that's not going away. And when the market thinks it's worth way more than it actually is, selling it back to Bob and looking for the next opportunity. This is how Warren Buffet and other value investors have made billions.</p>
            <p>So, the skill is not in being a quantitative wizard and financial genius, but in independent reason, discipline, and patience. It becomes more a game of art and wisdom combined with financial and business knowledge, not just pure statistics and forecasting.</p>

            <h2>What Does the Data Say About Value Investing?</h2>
            <p>By the name alone, value investing is subjective. It depends on what you define as "value." Many investors have had different metrics to determine value, and many have had great success. So, there isn't a singular data point to look at and say whether it has been a successful strategy. But we can look at a few data points to get a sense of how the general principle performed in the past.</p>
            <p>Economists Eugene Fama and Kenneth French set out to answer the same question back in 1992, and their work is continued into today. They define value as stocks with a high book to market ratio (book value equity/market capitalization), where book value is total assets – total liabilities. Said differently, companies whose valuation in the market is cheap compared to their net assets.</p>
            <p>After accounting for general market returns, risk, and company size, their value factor outperformed the market by 4.2% annualized from 1926 – 2025. Although consistent over the long term, value is cyclical and underperforms in periods of high growth and positive sentiment. From 2007-2020, this value factor underperformed the market by 3.5% annually and underperformed by 2.36% over the last 12 months, as focus is on the future of AI and growth potential.</p>
            <p>Immediately jumping to the conclusion that this value is a better investment is overly simplistic though and doesn't consider <em>why</em> these companies are trading at relatively cheap book to market ratios. It could be that they are inexpensive because they are seen as riskier to investors, pushing the price down (and thus the book to market ratio up). And because they are riskier, in an efficient market they will earn higher returns to compensate for this increased risk, explaining the excess returns. In other words, these "value" stocks earn higher returns simply because they are riskier, and this risk is why the book to market ratio is more favorable. This is the view Fama and French take themselves.</p>
            <p>Behavioral economist Richard Thaler disagrees with their interpretation though and argues that value is the result of overreactions by investors and other behavioral biases. Because of these biases, investors chase hype/growth and neglect value, seeing only the recent bad news that created the value purchase. Likewise, they overweight the recent great news and performance of the growth stocks.</p>
            <p>Testing the theory, a 2015 paper by Thaler finds behavioral models explained 50-70% of the returns from Fama and French's "value" factor above, through investor preferences that lead to systematic mispricing, rather than purely rational risk compensation. They attribute this to prospect theory, the bias that investors are more sensitive to losing money than to earning the same amount of money.</p>
            <p>Likely, the answer is somewhere in the middle. Yes, "value" stocks measured with book to market ratios outperform the general market over the long term. Some of this outperformance is attributed to higher risk which demands higher returns, aligning with efficient markets. But some of this outperformance is attributed to behavioral gaps and mean reversion, creating systematic mispricing leading to investment opportunities.</p>

            <h2>How Does This Work in Practice?</h2>
            <p>Value stocks/opportunities follow bad news or poor performance, putting them in the loss domain or associating the stock as a loser. Due to loss aversion, investors anchor on this poor past performance and are reluctant to fully incorporate positive signals (great fundamentals or future growth opportunities). Investors also irrationally forecast this poor performance out indefinitely. This underreaction and irrational forecast keeps prices depressed longer than rational models predict, leading to higher future returns as the mispricing corrects. In contrast, growth stocks (hype) benefit from overreaction to positive signals, inflating prices temporarily and reducing future expected returns.</p>
            <p>Ironically, buying the poorly performing stock at a great price is safer than buying the highly profitable and quickly growing stock at full price, for two main reasons.</p>
            <p>First is what was just discussed, i.e., the behavioral biases. The growth stock's future performance is already "priced in," meaning today's stock price already reflects this optimistic forecast. The company might perform in line with expectations, but if it doesn't, returns will likely underperform the market. On the other hand, because of these biases, the value stock's price reflects continued poor performance, even if future catalysts and financial metrics indicate otherwise. So, if the value company performs better than is (irrationally) expected, you benefit from both a repricing of the stock to a higher valuation more in line with the market, and from the earnings growth of the underlying company.</p>
            <p>This brings into play the second reason buying the value stock is often higher returning than the growth stock with positive recent performance: mean reversion. Counterintuitively, the growth stock with great profitability and high growth is more likely to face increased competition as competitors enter the market, reducing sales growth and profit margins. Meanwhile, the underperforming value stock is more likely to see a turnaround as the company adapts and implements changes.</p>
            <p>Let's visualize this. Imagine a growth company VS a value company. The growth company grows earnings quickly in the beginning, and then stabilizes, totaling 97% EPS growth over 36 months. Meanwhile the value company has negative EPS growth in the beginning, then stabilizes earnings and slowly grows them totaling 20% EPS growth over 36 months.</p>
            <figure>
                <img src="images/EPS Value VS growth.svg" alt="EPS growth comparison between growth and value companies">
                <figcaption>EPS Growth: Growth Company vs Value Company</figcaption>
            </figure>
            <p>Over time, markets are revaluing both stocks to reflect investors' new predictions about the future. The growth stock's P/E ratio comes down as investors realize new entrants are joining the market and growth is slowing, demanding a lower price to reflect the new risk. On the other hand, the value stock's earnings have started to grow again, and the company has proven a turnaround, leading to more optimism and a higher valuation.</p>
            <figure>
                <img src="images/PE Ratio growth VS value.svg" alt="P/E ratio comparison between growth and value stocks">
                <figcaption>P/E Ratio Changes: Growth Stock vs Value Stock</figcaption>
            </figure>
            <p>What does this then do to stock prices and total returns?</p>
            <figure>
                <img src="images/Growth stock returns summary.svg" alt="Growth stock returns summary">
                <figcaption>Growth Stock Returns Summary</figcaption>
            </figure>
            <figure>
                <img src="images/Value stock returns summary.svg" alt="Value stock returns summary">
                <figcaption>Value Stock Returns Summary</figcaption>
            </figure>
            <figure>
                <img src="images/Returns comparison.svg" alt="Returns comparison between growth and value stocks">
                <figcaption>Returns Comparison: Growth vs Value</figcaption>
            </figure>
            <p>So despite the growth stock having 97% earnings growth compared to 20% for the value stock, the large repricing of expectations and perceived risk through the P/E ratio multiple outweighs EPS growth's contribution to returns, causing the value stock to outperform.</p>
            <p>Then how do we capitalize on these behavioral biases and mispricings?</p>
            <p>The goal is to use different metrics to first identify "value" opportunities (these metrics will be discussed in a future blog), and then within this basket of stocks, decipher which stocks are truly great companies that we are comfortable holding long term.</p>
            <p>This method allows us to have a bit of a safety net. Because we own a stake in a fundamentally sound business, we are not worried about short term price fluctuations or earnings swings. We believe the company will stay healthy and continue to grow long term, so we are comfortable owning through volatility and we will continue to benefit from revenue and earnings growth. Given our attractive entry price, we will also benefit from buying in closer to (or below) the "intrinsic value." Thus, our downside risk is lower and we will benefit from excess returns from the market revaluing the stock to higher multiples as the irrational sentiment fades.</p>

            <h2>Why Don't More Investors Follow This Strategy?</h2>
            <p>All of this begs the question, why aren't more investors following this, if it's so clear?</p>
            <p>Financial advisors, fund managers, and financial institutions all have an obvious incentive. Keep their jobs. They don't keep their jobs if their investments don't perform well. Every large fund manager is constantly compared to the market or a benchmark they're measured against. If they underperform by 5% for one year, investors in the fund will see this and immediately pull their money out, asking why they're invested in an energy stock they've never heard of when AI is the future. So, they are incentivized to mirror these benchmarks to avoid underperformance, regardless of the opportunities that exist.</p>
            <p>Ok, but why don't retail investors who don't have this constant comparison value invest more often?</p>
            <p>Many investors either have not learned about this in detail, don't believe it if they have, or have tried and failed (usually due to their own cognitive biases).</p>
            <p>This strategy is simple on the surface but not easy at all. It is extremely difficult to decipher between a value stock that still is a sound company and has just gotten irrationally beaten down from one that is truly risky. This requires a great understanding of financial statements, business, economics, and different industries, and requires a lot of time spent researching these topics.</p>
            <p>It is challenging because of these cognitive biases. It takes a lot of objective reasoning with a very emotional thing: money. We associate what has been a good investment with what will be a good investment. So, it is very hard to look at a stock that has declined 40% in the last 2 years and still buy it. It's even harder to keep trusting the process when you buy it and it goes down another 20%, and then to not sell it when you're finally back at break even. But this is exactly what it takes. Seeing underperformance of 20% one year and still trusting the process. After all, if you want to beat the market, you <em>have to</em> deviate from the market.</p>
            <p>Finally, the media has an incentive to make the news as entertaining as possible, so they are less likely to tell you to go buy a boring manufacturing company because it's currently undervalued. Thus, media reports how Nvidia is projected to do tons of sales over the next couple years and that the stock is going to explode, gaining more views than simply preaching the value in buying a stable company and holding. This exacerbates the bias.</p>

            <h2>What Will Future Blogs Be About?</h2>
            <p>Mainly on value investing, and different opportunities I see in certain stocks that I am personally invested in. I will never give a stock pick that I do not personally invest in, and I will publish the returns and holdings of my portfolio periodically. I will be fully transparent and use my portfolio as a proving ground for value investing and educate my readers on the "why" behind my investments every time.</p>
            <p>However, value investing does not require too much active management. It is a long-term buy and hold strategy mainly, so there will be plenty of downtime to write about other topics across economics, finance, business, and psychology (within finance). Some blogs may be a little bit of a tangent into some more interesting or recent topics.</p>
            <p>However, every blog post has the same main goal. Educate my readers about financial markets and how to successfully value invest to diversify, lower risk, and still earn great returns.</p>

            <h2>Mutual Funds and ETFs That Value Invest</h2>
            <p>Given this blog will be mainly about singular value stock picks and tracking my own portfolio, I would like to give you an out if you believe in this strategy but do not want to manage investments and spend the time yourself.</p>
            <p>Below are some mutual funds and ETFs that follow a value investing strategy or a similar methodology. You can find out more about their returns, fees, and methodologies on their website or on Morningstar.com.</p>
            <ol>
                <li>FullerThaler Behavioral Small-Cap Equity Fund (FTHSX)</li>
                <li>Vanguard Value ETF (VTV)</li>
                <li>iShares Russell 1000 Value ETF (IWD)</li>
                <li>Schwab U.S. Large-Cap Value ETF (SCHV)</li>
                <li>Avantis U.S. Large Cap Value ETF (AVLV)</li>
                <li>Dimensional US Targeted Value ETF (DFAT)</li>
                <li>Dodge &amp; Cox Stock Fund (DODGX)</li>
                <li>Oakmark Fund (OAKMX)</li>
                <li>Tweedy, Browne Global Value Fund (TBGVX)</li>
                <li>Fidelity Value Fund (FDVLX)</li>
            </ol>

            <hr style="margin: 2rem 0;">
            <p style="font-size: 0.9rem; color: var(--dark-grey);">
                <sup>[1]</sup> <a href="https://www.berkshirehathaway.com/letters/2024ltr.pdf" target="_blank">https://www.berkshirehathaway.com/letters/2024ltr.pdf</a><br>
                <sup>[2]</sup> <a href="https://www.federalreserve.gov/releases/z1/20250911/z1.pdf" target="_blank">https://www.federalreserve.gov/releases/z1/20250911/z1.pdf</a>
            </p>
        `
    },
    {
        id: 'post-2',
        title: 'Blog 2 - Price Is a Forecast, Not a Fact',
        date: '2026-01-31',
        preview: 'Price is closer to a forecast than a thermometer. It is a compressed opinion about the future, not a verdict on the present.',
        content: `
            <h2>First, a life update for those who care</h2>
            <p>I was about to say for those of you who know me personally, but everyone reading this knows me personally, so I will just say what I was going to say.</p>
            <p>As you know, I graduated in December. I'll be out in Utah until May saving up money for my Europe travels this summer and working on an app with my roommate Jackson. After this I plan to move back to San Diego and take a gap year continuing to work on this app, or some other business that we may fall into after working on this app. Everything moves in this early phase of life. I can't say where I'll be, all I can say is for a year or two I'll be serving tables to fund my ventures trying to build something. Whatever comes on the other side of that, even failure, I feel I will not regret it at all. It's a "risk" I feel I must take.</p>
            <p>The app is designed to be a tool to help you use your phone intentionally, in scheduled windows, rather than impulsively. A lot of "screen time" or "productivity" apps right now center around blocking windows. We want to instead center around usage windows.</p>
            <p>It sounds like the same thing, but it's different both mentally and in reality. Blocking your phone for the workday, then having unlimited freedom after that does not ingrain better habits with your phone. It creates whiplash, using it none, then using it for hours. It creates constant internal willpower battles. Learning how to instead use it as a tool to support your life in scheduled windows limits the downside and enhances the upside of our devices, how they were designed to work. There is no internal willpower battle, it's just a new way of life, a new routine, new habits.</p>
            <p>But that's really beside the point. I wanted to mention that because that is why I haven't been writing these blogs. I've been very focused on coding this app. I've also been working 6 days a week at Bambara (restaurant), learning more about life there than school ever taught me.</p>
            <p>But I also really am curious about markets, investing, and how psychology comes into play within these areas. I like writing about this because it helps me learn more. And I feel everyone reading these has the capabilities to understand these domains and apply them to their own portfolios. So, I want to help give everyone reading these blogs the tools and frameworks to do that.</p>
            <p>But I also want to keep writing these and expand into other topics, not just value investing. So you can also all understand: where are we at currently, where are we headed, how can I invest my money today to best prepare for that? And more.</p>
            <p>So that's why I scraped some time together to write this. I'll make it more consistent moving forward, and this is just the beginning. You are all my friends reading this, and I want you all to understand markets, finance, investing, economics, and psychology more with every article. That's my goal. So please send me feedback (text me) on how this piece of writing either helped that, or where it could be better. Also, I don't like the idea of making this subscriber based, but so I don't have to text you every time I make one of these, I made an email notification list. Enter your email at the bottom if you want to be alerted every time I publish.</p>
            <p>Enjoy.</p>

            <h2>Price Is a Forecast, Not a Fact</h2>
            <p>Most people look at a stock price the way they look at a temperature. A number that tells you how things are.</p>
            <p>That is not what price is.</p>
            <p>Price is closer to a forecast than a thermometer. It is a compressed opinion about the future. A story translated into a number, updated every second by crowds of humans with incentives, fears, and time limits. When you internalize that, "cheap" stops meaning "low." It starts meaning "misaligned expectations."</p>
            <p>This is the operating system I want to install: the price you see is not a verdict on the present. It is a bet on what comes next.</p>
            <p>A business can be healthy and still be a bad investment if the price assumes miracles. A business can be imperfect and still be a good investment if the price assumes a funeral. The gap between those assumptions and reality is where value lives.</p>

            <h2>Price vs. value, as expectations</h2>
            <p>Value, in plain language, is what you get over time for what you pay today. Price is what you pay.</p>
            <p>The mistake is treating price like it is the same thing as value. Price is just the current clearing point of competing expectations. It encodes what investors collectively believe, or fear, about growth, profits, competition, interest rates, regulation, and durability. It also encodes impatience, and how badly people need to be right soon.</p>
            <p>Two things follow from this.</p>
            <p>First, price is forward-looking by nature. Even when people say they are "looking at fundamentals," they are usually arguing about future fundamentals.</p>
            <p>Second, a stock can go nowhere even while the company improves, if that improvement was already expected. And a stock can fall even while the company does fine, if the market expected greatness.</p>
            <p>When someone tells you a stock is "cheap," the right response is not agreement or disagreement. The right response is: cheap relative to what future?</p>

            <h2>The two scoreboards</h2>
            <p>Markets keep two scoreboards.</p>
            <p>In the short run, markets are a popularity contest. Mood, narratives, positioning, and fear dominate.</p>
            <p>In the long run, markets are an accounting of results. Cash flows, resilience, and competitive realities start to matter more than charisma.</p>
            <p>Benjamin Graham said it cleanly: "In the short run, the market is a voting machine but in the long run it is a weighing machine." I like that line because it reminds me to stop treating every price move like new truth.</p>
            <p>The voting machine is not stupid. It is human. It overweights the most available story. It anchors on the most recent chart. It follows what other people seem to believe, because social proof in markets is a survival instinct wearing a suit and running spreadsheets.</p>
            <p>The weighing machine is slower, but stubborn. Over time, businesses that generate durable cash and reinvest it well tend to pull their market value toward them. Businesses that disappoint, or that require constant financing, tend to lose the ability to sustain optimistic pricing.</p>

            <h2>A quick picture from the late 1990s</h2>
            <p>If you want a clean example of expectations overwhelming reality, look at the dot-com bubble.</p>
            <p>The late 1990s were not irrational because people believed the internet would matter. They were irrational because price stopped reflecting how much it would matter, and started reflecting how fast it might matter, how universally it might matter, and how soon profits would arrive.</p>
            <p>Many companies went public with little revenue, no profits, and vague business models. Even established companies with real technology and real customers were priced as if growth were infinite and competition irrelevant. Price became a vote on possibility, not outcomes.</p>
            <p>When expectations are that high, reality does not need to be bad to disappoint. It only needs to be normal.</p>
            <p>As interest rates rose, capital costs rose and cash burn became visible, the weighing machine reasserted itself. Some businesses survived and even became dominant years later. Many did not. But almost all investments made at peak expectations were poor, regardless of whether the underlying idea was sound.</p>
            <p>The lesson is not that innovation is dangerous. The lesson is that paying today for perfection tomorrow leaves no margin for reality.</p>

            <h2>My three-layer framework for value</h2>
            <p>I do not think value investing is a scavenger hunt for cheap-looking ratios. I think of it as three stacked lenses. Each lens matters, but none is sufficient.</p>
            <p>The first lens is statistical value. This is screen-level cheapness. Ratios like price-to-earnings, price-to-sales, price-to-book, free cash flow yield. I use them like a flashlight in a dark room. They help me find doors. They do not tell me what is behind them.</p>
            <p>The second lens is economic value. This is business reality. How much cash does the business generate, and how reliably? How fragile is it in a downturn? Does it need constant outside funding? Does it have a real competitive position, or is it one product away from irrelevance? Here I am trying to understand the machine, not just the sticker price.</p>
            <p>The third lens is behavioral value. This is the why behind mispricing. What narrative dominates attention? Who is forced to sell? Who is structurally unable to buy? What career risks do professional managers face? What time horizons trap investors? What future is currently priced in? If there is no behavioral reason for mispricing, I assume I am missing something.</p>
            <p>Put differently: statistical value finds candidates, economic value explains the quality of the underlying business, and behavioral value explains what future the market is expecting and why it might be overreacting.</p>

            <h2>Why metrics feel comforting, and why that comfort misleads</h2>
            <p>Metrics feel honest because they are crisp, simple, and objective.</p>
            <p>A ratio looks like reality because it is precise. It gives your brain closure. In a world of uncertainty, numbers feel like solid ground.</p>
            <p>That feeling is useful. It is also dangerous.</p>
            <p>A metric is a narrow measurement taken at one moment, under one accounting system, created for a specific reason. It can be distorted by cycles, buybacks, one-time charges, acquisitions, or accounting choices. A business is a living system, not a spreadsheet.</p>
            <p>More importantly, a "cheap" metric can be a warning label, not a bargain tag. Sometimes the price is low because the future is genuinely worse than the past. Sometimes it is low because investors hate uncertainty more than bad outcomes. A ratio cannot tell you which you are looking at.</p>
            <p>So I treat metrics as filters, not answers. They help me ask better questions. They do not declare truth.</p>

            <h2>A mental checklist, in the form of questions</h2>
            <p>When I am tempted to ask, "Is it cheap?" I try to replace that with questions that force expectations into the open.</p>
            <p>What future is implied by this price? Not the future I want, or management is selling, but the future the market is already paying for.</p>
            <p>What would have to go right for this price to make sense? If the answer requires perfect execution with no setbacks, the price is fragile. If it requires the business simply keeps operating at all, the price might be cheap.</p>
            <p>Or, what would surprise investors? Surprise is the engine of repricing.</p>
            <p>Why is this being ignored or disliked? Sometimes the answer is rational. Sometimes it is structural. Sometimes it is emotional. I do not assume the crowd is wrong, but I do assume the crowd is human.</p>
            <p>If you hold these questions in your head, you stop chasing cheap ratios and start evaluating the gap between expectation and reality.</p>

            <h2>Why this works, and why it is hard</h2>
            <p>This approach works because markets are not perfectly patient or perfectly rational. Humans overreact, anchor, herd, and extrapolate. Losses hurt more than gains feel good. Recent history feels truer than distant history. Crowded narratives feel safer than lonely ones.</p>
            <p>It is hard because even when you are right about the long-term weighing machine, you must live through the voting machine.</p>
            <p>There is a simple idea in finance called limits to arbitrage. In plain English, it means smart money cannot always correct mispricing quickly. Being right is not the same as being early. Capital has constraints. Careers have clocks.</p>
            <p>So mispricings persist. Narratives win longer than they should. That does not invalidate the weighing machine. It only makes patience expensive.</p>
            <p>This is why value investing is not primarily a math problem. It is a temperament problem.</p>
            <p>I'll leave you with a simple question to screen with, rather than a ratio: if the market's current price is a forecast, what specific forecast is embedded in it, and is that realistic?</p>

            <hr style="margin: 2rem 0;">
            <section class="subscribe-section">
                <div class="section-header">
                    <h2 class="section-title">Stay in the Loop</h2>
                    <p class="section-subtitle">Get an email when a new post goes live.</p>
                </div>
                <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/keaton" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.com/keaton', 'popupwindow')">
                    <input type="hidden" name="embed" value="1">
                    <input class="subscribe-input" type="email" name="email" placeholder="Enter your email" required>
                    <button class="subscribe-button" type="submit">Notify Me</button>
                </form>
                <p class="subscribe-note">No spam. Unsubscribe anytime.</p>
            </section>
        `
    },
    {
        id: 'post-3',
        title: 'Blog 3 - When Price Is a Forecast, Stories Move the Market',
        date: '2026-03-12',
        preview: 'Price is a crowd forecast built from stories, not spreadsheets. This post explores how narratives dominate market pricing, why mispricings persist due to institutional constraints, and applies the three-layer value framework to PayPal as a real-time example.',
        content: `
            <section class="subscribe-section" style="margin-bottom: 2rem;">
                <div class="section-header">
                    <h2 class="section-title">Stay in the Loop</h2>
                    <p class="section-subtitle">Get an email when a new post goes live.</p>
                </div>
                <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/keaton" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.com/keaton', 'popupwindow')">
                    <input type="hidden" name="embed" value="1">
                    <input class="subscribe-input" type="email" name="email" placeholder="Enter your email" required>
                    <button class="subscribe-button" type="submit">Notify Me</button>
                </form>
                <p class="subscribe-note">No spam. Unsubscribe anytime.</p>
            </section>
            <hr style="margin: 2rem 0;">

            <p><strong><em>PERSONAL SECTION – SKIP IF YOU WANT TO</em></strong></p>

            <p>Welcome to the jungle baby. We're back.</p>

            <p>Actions speak louder than words, and it took me more than a month to pump another one of these out. I let my own word down. That won't happen again. I'll post these once a week moving forward, on Sunday nights.</p>

            <p>Please use the email subscribe so I don't have to text all of you apes. I think this is up to 20 people now, and you all know how much I hate using my phone.</p>

            <p>My friend Jack (shoutout Jack, best salesman in the world), said he liked the personal update. So I'll give one again incase anyone cares. I don't expect many will, but I suspect some might. For anyone I haven't spoken to in a while that would like to catch up, let's ski, golf, or grab some beers before I wrap up my time here.</p>

            <p>Speaking of phone usage, I have been coding an insane amount for the app I'm developing/working on with my roommate Jackson. It is actually really, really cool in my definitely not biased opinion. But genuinely, it is.</p>

            <p>At a high level, it helps you understand your phone usage patterns and habits more, and allows you to genuinely connect with friends with our social tab and share about your real life. Not Instagram highlights, but your real life, only with photos or videos that have been taken in the last 3 days. Friends only. No feed, no algorithm, no ads, no data collection.</p>

            <p>So we help you reclaim your time from these highly addictive and gamified apps but then also give you a way to connect with people you care about online once you step out of that bubble. Because without that, it's pretty isolating. That's pretty apparent to those of you who know me personally. I'm a ghost online, and I wish it didn't have to be that way. I'll have the app for everyone to download and test by April 1st, and I'll have it launched on the app store by May 1st before I go to Europe.</p>

            <p>Besides that, I've been skiing a copious amount of days and working a healthy amount at Bambara, slowly transitioning into the bar as a barback. Every day is different. I have no clue where this app will take me, but I'm excited for what's to come. I can hear my Dad down my ear telling me to start looking for a real job. Hi Dad!</p>

            <p>Hope you enjoy the read. Cheers.</p>

            <p>In the last post, we established something that sounds simple but changes how you see markets once you sit with it. By definition, every dividend in the past has been paid. Every earnings report has been filed. Every buyback has been announced. All of that is the rearview mirror. The only thing left for price to reflect is what people believe will happen next.</p>

            <p>Price is the marginal clearing point of those beliefs. Marginal meaning it is not set by the average investor, or even the smartest one. It is set by the most recent buyer and seller willing to transact at that moment. It reflects whose conviction is strong enough, urgent enough, or anxious enough to act right now.</p>

            <p>That makes price a crowd forecast.</p>

            <p>And if price is a crowd forecast, the most important question is: what actually goes into it?</p>

            <h2>Why Forecasts Are Made of Stories</h2>

            <p>When you try to forecast what a company will earn three years from now, you are stacking uncertainties on top of uncertainties. Revenue depends on consumer behavior, competitor strategy, regulatory shifts, input costs, interest rates, management decisions, and technological change. Each of those carries its own range of outcomes. Combine them and the range of plausible futures becomes enormous.</p>

            <p>Forecasting future numbers precisely is not just hard. It is, in any honest sense, impossible. Not because people are careless. Because the future does not arrive neatly.</p>

            <p>When precision breaks down, probabilities widen. And when probabilities widen, humans do what they have always done. They simplify.</p>

            <p>We are not wired to think in probability distributions. We are wired to think in stories. What feels safe. What feels inevitable. What feels obvious looking back. A clean narrative compresses a wildly complex future into something the brain can act on.</p>

            <p>This matters because when you accept that numerical forecasts are inherently uncertain, you realize that something else has to fill the gap. And what fills the gap, overwhelmingly, is narrative. Not spreadsheets. Not models. Stories about what the future will look like, told with enough confidence that they feel like facts.</p>

            <p>Consider how this plays out in real time. A company reports earnings. Two signals arrive simultaneously. The first is the actual report: revenue composition, margin trends, guidance, balance sheet changes. That takes analysts hours, sometimes days, to fully digest. It is dense, ambiguous, and full of tradeoffs.</p>

            <p>The second is a headline. "Company X misses expectations." Four words. Instantly understood. Emotionally loaded.</p>

            <p>Which one moves price first? Always the headline. Always the story. Not because the story is more accurate, but because it is faster. Price follows the fastest signal, not the most complete one.</p>

            <p>Business reality updates over quarters and years. Narratives update in seconds.</p>

            <h2>The Crowd Mind</h2>

            <p>Gustave Le Bon studied crowd behavior more than a century ago, and what he found still describes markets with uncomfortable precision. He wrote that <strong><em>"crowds always, and individuals as a rule, stand in need of ready-made opinions on all subjects. The popularity of these opinions is independent of the measure of truth or error they contain, and is solely regulated by their prestige."</em></strong></p>

            <p>Sit with that. The popularity of a belief has nothing to do with whether it is true. It depends on how prestigious the belief feels. How confident the people saying it appear. How many others already seem to hold it.</p>

            <p>Le Bon also observed that <strong><em>"a crowd thinks in images, and the image itself calls up a series of other images, having no logical connection with the first."</em></strong> One image triggers another. One story calls forward the next. The chain is emotional, not analytical.</p>

            <p>Markets are the crowd mind rendered numerically.</p>

            <p>That does not mean crowds are stupid. It means they are social. Beliefs propagate through contagion, not calculation. Once a narrative takes hold, it spreads through imitation and reinforcement. People adopt opinions not because they independently arrived at them, but because others hold them. And critically, price movement itself becomes evidence. Rising prices feel like validation. Validation attracts more capital. More capital pushes prices higher. The loop feeds on itself.</p>

            <p>This works in both directions. And it explains something that seems impossible at first glance: markets can be mispriced even when everyone agrees.</p>

            <h2>Housing, 2005 to 2007</h2>

            <p>The U.S. housing market in the mid-2000s is one of the cleanest examples of what happens when the narrative becomes the forecast.</p>

            <p>The narrative was simple. Housing always goes up. Real estate is the safest asset class. Homeownership builds wealth. This is not a gamble, this is just how it works.</p>

            <p>That narrative spread through culture, not spreadsheets. Neighbors saw neighbors getting rich. Cocktail party conversations turned into investment theses. Television shows about flipping houses made speculation feel like common sense. The story was everywhere, which made it feel true, which made it even more everywhere.</p>

            <p>As prices rose, belief strengthened. Rising prices reinforced the story that housing was stable and self-correcting. That confidence pulled in more buyers. More buyers pushed prices higher. Higher prices made the narrative feel even more obvious.</p>

            <p>The story became the forecast. The forecast justified the price. The price validated the story.</p>

            <p>For years, nothing seemed to contradict it. If prices are rising, the brain concludes the system must be healthy. If the system is healthy, higher prices must be justified. It is circular, but it feels like common sense while you are inside it.</p>

            <p>Then reality did what it always does. Mortgages still require monthly payments. Payments require income. Income is not a narrative. Cash flow is not a vibe. Those constraints are the closest thing markets have to physics. Physics can be ignored for a while, but it cannot be repealed.</p>

            <p>Housing did not need to become apocalyptic overnight. It only needed enough borrowers to reach the boundary at the same time. A missed payment here. A rate reset there. A refinancing that could not happen because prices stopped climbing. Once the system could no longer roll forward on belief alone, the story lost its foundation.</p>

            <p>And once the story cracked, the same loop that drove prices up reversed direction. Falling prices invalidated the narrative. Invalidation created fear. Fear caused selling. Selling pushed prices lower. Lower prices created more fear. The crowd did not discover a new world. It rediscovered an old one.</p>

            <p>Le Bon anticipated this. He wrote that <strong><em>"the precise moment at which a great belief is doomed is easily recognizable; it is the moment when its value begins to be called into question."</em></strong></p>

            <p>That is the anatomy of a narrative break. Not a sudden revelation. Just enough doubt to crack the consensus.</p>

            <p>The uncomfortable part is that most people inside the bubble were not fools. Many were doing exactly what their incentives, peers, and price signals told them was correct. Fund managers who sat out the rally faced redemptions. Lenders who tightened standards lost market share. Individuals who rented watched friends build paper wealth for years.</p>

            <p>Bubbles are not caused by idiots. They are caused by rational agents playing a higher-order belief game under constraint.</p>

            <h2>Expectations Mean Reversion</h2>

            <p>The housing story illustrates something I want to name explicitly, because it is one of the most important ideas in this entire framework.</p>

            <p>When people hear "mean reversion," they usually think of business fundamentals. Earnings recover. Margins normalize. Cycles turn. That does happen. But it happens slowly, over quarters and years.</p>

            <p>What mean reverts fastest is not the business. It is what people believe about the business.</p>

            <p>This is what I call expectations mean reversion. The crowd forms a view. That view gets stretched by narrative momentum, pushed further and further from the plausible range of actual outcomes. Then something reminds the crowd of reality. Not catastrophe. Just something less perfect than the story promised. And the forecast snaps back.</p>

            <p>Expectations swing wider than reality because expectations are built out of confidence, not cash flow. And confidence, unlike cash flow, can change overnight. A single earnings miss, a management change, a shift in sector sentiment, and the forecast embedded in price moves dramatically before the underlying company has changed at all.</p>

            <p>The most volatile thing in markets is not cash flow. It is confidence.</p>

            <p>That is why prices can swing 30, 40, 50 percent on companies whose actual financial position barely moved. The business did not change by half. The crowd's forecast about the business did.</p>

            <h2>Why Mispricings Persist</h2>

            <p>If this is visible to anyone paying attention, why doesn't it get corrected quickly?</p>

            <p>Because of <em>who</em> owns the market.</p>

            <p>Roughly 55 to 60 percent of U.S. equities are held directly by institutions: mutual funds, ETFs, pension funds, insurers, hedge funds, and foreign institutions. The remaining 40 percent or so is labeled "households," but that label is misleading. Most household equity exposure sits inside retirement accounts, is implemented through funds, and is allocated or advised by financial professionals. Once you adjust for that, the share of capital that is both discretionary and independently reasoned is a sliver of the total.</p>

            <p>Nearly all of the money in public markets is professionally managed. And nearly all of those professionals operate under the same constraint.</p>

            <p>Looking wrong alone is more dangerous than being wrong together.</p>

            <p>A manager who loses 15% alongside the market keeps their job. A manager who loses 5% while the market gains 20% may not. The absolute loss is smaller, but the relative loss is career-threatening. That single fact reshapes how the majority of capital in the world is deployed. Not toward long-term accuracy. Toward short-term defensibility. Toward consensus. Toward whatever the crowd already believes.</p>

            <p>Mispricings persist not because people fail to see them, but because the overwhelming majority of capital is structurally unable to act on them. The few who can see the opportunity and also have the freedom to act on it represent a tiny fraction of the market. That is why mispricings can last for months, sometimes years, even when the gap between narrative and reality is wide open.</p>

            <p>This is not stupidity. This is structure.</p>

            <h2>What This Looks Like Right Now</h2>

            <p>My friend Aidan told me he wanted more examples, so let me show you what this framework looks like applied to a real situation happening right now.</p>

            <p>PayPal dropped roughly 20% on February 3rd, 2026. In a single day. The trigger was a Q4 earnings miss combined with the surprise departure of CEO Alex Chriss. The stock has continued drifting lower since, trading near $40 as I write this, down roughly 50% from where it was a year ago and nearly 90% from its all-time high.</p>

            <p>The narrative is brutal. Lost its moat. Can't compete with Apple Pay and Google. CEO fired. Growth is over. The story writes itself.</p>

            <p>Now let me walk through the three layers of value I described in the last post and see what is actually there.</p>

            <p>The first layer is statistical value. This is where you shine a flashlight to find doors. PayPal currently trades at roughly 7 times forward earnings. Its free cash flow yield is above 10%. Price to book is under 3, compared to a five-year average near 6. By almost any screen-level metric, this company has not been this cheap since its earliest days as a public company. The flashlight found a door.</p>

            <p>The second layer is economic value. This is the business itself. PayPal generated over $5.5 billion in free cash flow over the last twelve months. It holds roughly $14 billion in cash and short-term investments against about $11 billion in debt, leaving a positive net cash position. It has 438 million active accounts. Venmo grew total payment volume 14% last quarter. The company has announced partnerships with OpenAI, Google, and Microsoft that have not yet shown up in the numbers. It just initiated a dividend and is buying back shares aggressively, potentially retiring 15% of outstanding shares this year at current prices. Is the business perfect? No. Revenue growth is slow. Branded checkout faces real competition. But is this a company in danger of going away? That is very hard to argue when you are generating $5 billion a year in free cash.</p>

            <p>The third layer is behavioral value. This is the why behind the mispricing. What story is the crowd telling? The story right now is that PayPal is a declining business in a competitive market with unstable leadership. That story is not entirely wrong. Competition is real. The CEO change adds uncertainty. But the question is not whether there are problems. The question is whether the problems are as severe as the price implies.</p>

            <p>At 7 times earnings and a 10% free cash flow yield, the market is pricing PayPal as if growth is permanently over and the business will slowly deteriorate. That is a very specific forecast. Is it realistic?</p>

            <p>This is exactly the framework at work. Statistical value found the door. Economic value told us the business is still generating enormous cash with a strong balance sheet and real assets. Behavioral value tells us the narrative is extremely negative, consensus is confidently pessimistic, and the structural constraints we just discussed make it very difficult for professional money to step in and buy right now.</p>

            <p>Does this mean PayPal will go up? I have no idea. I think in probabilities, not certainties. The thesis could be wrong. Competition could accelerate. The new CEO could stumble. But the range of likely outcomes, weighed against what the price currently assumes, suggests the forecast is too extreme. That is asymmetry, not prophecy.</p>

            <p>And the practical approach is the same as the principle. You do not bet the house on a single entry point. You scale in. You define your allocation ahead of time. You enter in pieces. You assume it might drift lower before anything improves, because narrative momentum does not stop just because you showed up. You only keep adding if the thesis holds, and you let lower prices improve your cost basis rather than shake your conviction. You stay solvent. Long only. No leverage. No forced selling.</p>

            <h2>The Forecast Behind Every Price</h2>

            <p>Price is a forecast, and that forecast is made mostly of stories, not spreadsheets. The stories change faster than the businesses do. The stories propagate through contagion, not analysis. The stories are held in place by structural incentives that have nothing to do with whether they are true. And when the stories shift, prices move violently in either direction, often long before reality has caught up.</p>

            <p>When you look at a price, what do you see? A fact about the company, or a story the crowd is telling itself about the company?</p>

            <p>I don't want to/never will make a single dime off of this blog. I do this purely for my own learning, and to help others learn more about markets and investing.</p>

            <p>So share with a friend or family member if you enjoyed. Let's get more people knowledgeable about investing.</p>

            <hr style="margin: 2rem 0;">
            <section class="subscribe-section">
                <div class="section-header">
                    <h2 class="section-title">Stay in the Loop</h2>
                    <p class="section-subtitle">Get an email when a new post goes live.</p>
                </div>
                <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/keaton" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.com/keaton', 'popupwindow')">
                    <input type="hidden" name="embed" value="1">
                    <input class="subscribe-input" type="email" name="email" placeholder="Enter your email" required>
                    <button class="subscribe-button" type="submit">Notify Me</button>
                </form>
                <p class="subscribe-note">No spam. Unsubscribe anytime.</p>
            </section>
        `
    },
    {
        id: 'post-4',
        title: 'Blog 4: The Story That\u2019s Cracking',
        date: '2026-03-30',
        preview: 'The dominant market narrative \u2014 AI changes everything, spend now, profit later \u2014 is beginning to crack. This post applies our framework to what\u2019s happening right now: stretched valuations, a shifting macro environment, and a rotation into the companies the crowd has been ignoring.',
        content: `
            <p>Over the last three posts, we built a framework: price is a forecast, not a fact. That forecast is made mostly of stories, not spreadsheets. And when those stories stretch too far from reality, expectations mean-revert, often violently, creating the mispricings that value investors are built to exploit. Today I want to apply that framework to what is happening right now, because right now, in real time, we are watching one of the most dominant market narratives of the last three years begin to crack.</p>

            <h2>The Story the Market Has Been Telling Itself</h2>

            <p>Every market environment has a dominant narrative. In 2005, housing always goes up. In 1999, the internet makes earnings obsolete as a measure of value. These stories are never entirely wrong. The problem is never the kernel of truth. The problem is what the story becomes once it detaches from that kernel and starts feeding on its own momentum.</p>

            <p>The dominant story of the last three years has three layers. First, that artificial intelligence will transform every industry and the companies building AI infrastructure are the most important investments of a generation. Second, that the American economy is exceptionally resilient and interest rates will come down steadily. Third, American exceptionalism \u2014 there is simply no better place to invest than US equities, particularly US technology. Each layer contains truth. The question is whether the price already reflects the story and then some.</p>

            <p>The numbers suggest it does. Amazon, Alphabet, Meta, and Microsoft spent nearly $300 billion on capital expenditures in 2025, mostly on AI infrastructure. AI investment is projected to hit 1.6% of US GDP in 2026 \u2014 one of the largest concentrated capital booms in modern history. OpenAI generated roughly $12 billion in revenue in 2025 against an $8 billion operating loss, with losses projected to double to $17 billion in 2026 and again to $35 billion in 2027. Its valuation: approximately $750 billion. Meanwhile, an NBER study from February 2026 found that 90% of firms report no meaningful impact of AI on workplace productivity.</p>

            <p>Ninety percent, no productivity impact, while the largest technology companies pour over a trillion dollars into infrastructure funded increasingly by debt and circular financing. The hyperscalers are trapped in a prisoner\u2019s dilemma: if they pull back and a competitor doesn\u2019t, they risk irrelevance. Google CEO Sundar Pichai has said \u201Cthe risk of under-investing is dramatically greater than the risk of over-investing.\u201D That logic guarantees collective over-investment. It is the same logic that drove telecom companies to lay millions of miles of dark fiber in the late 1990s.</p>

            <p>Rajiv Jain, Chairman and CIO of GQG Partners, a fund I deeply respect, put it bluntly: <strong><em>\u201CThis is a narrative-driven market where basic fundamentals are being ignored and replaced with buzz words that are normalizing valuations completely uncorrelated with earnings.\u201D</em></strong> He points to SpaceX\u2019s $800 billion valuation against $15 billion in revenue. In normal markets, such math does not hold up. In narrative-driven markets, it doesn\u2019t need to \u2014 for a while.</p>

            <h2>The Technology Is Always Different. The Behavior Never Is.</h2>

            <p>Is it different this time? The answer is always the same. Yes and no. Yes, the technology is different. No, the human behavior is not. As one investor put it, the technology at the core of the mania is different every time; what doesn\u2019t change is human emotion \u2014 the fear of missing out and then the fear of loss, in that order.</p>

            <p>The 1840s British railway mania saw Parliament approve 263 Acts for new railway companies proposing 9,500 miles of track. Shopkeepers mortgaged their homes to buy railway shares. The technology was real \u2014 railways shrank the London-Glasgow journey from days to hours. The infrastructure that was overbuilt became the backbone of the Industrial Revolution. But the investors who bought at peak enthusiasm were devastated. The same pattern played out with automobiles, radio, transistor electronics, personal computers, and the internet. Every single one of these technologies changed the world. Every single one created investment bubbles where valuations detached from cash flows.</p>

            <p>After the dot-com bust, the capital investors lost evaporated completely, but the fiber optic cable laid during the boom remained in the ground. That overbuilt infrastructure went on to enable cloud computing, streaming, and the very AI revolution we\u2019re discussing. The technology mattered enormously. It just did not matter on the timeline, or at the prices, that investors paid for. The same will almost certainly be true of AI. The data centers being built today will power applications we cannot yet imagine. That does not mean the stocks funding them at these valuations will be good investments.</p>

            <p>This is the Ray Dalio insight from Blog 1 in action: <strong><em>\u201CMost investors tend to identify what has been a great investment as great, and they don\u2019t pay enough attention to its pricing, even though its pricing is the most important thing.\u201D</em></strong> Revolutionary technology attracting capital in excess of what can be profitably deployed is not a contradiction. It is the historical norm. GQG argues in a separate piece titled \u201CDotcom on Steroids\u201D that the current AI boom could be worse than the dot-com era because its scale relative to the economy is far greater. AI-related stocks have accounted for 75% of S&amp;P 500 returns, 80% of earnings growth, and 90% of capital spending growth since ChatGPT launched. The five largest companies represent roughly 30% of the entire index. Even Sam Altman has admitted investors are overexcited. When the person building the thing tells you the market for the thing is overheated, it is worth pausing.</p>

            <h2>What Is Cracking the Story</h2>

            <p>The AI narrative was already showing strain. DeepSeek demonstrated in January 2025 that frontier AI capabilities could be achieved at a fraction of expected cost, briefly wiping hundreds of billions from tech stocks. The \u201CSaaSpocalypse\u201D hit software companies like Salesforce and ServiceNow for losses exceeding 30% on fears that AI could replace traditional software business models. These were tremors.</p>

            <p>Then the macro environment shifted. On February 28th, 2026, the US-Iran conflict began, cutting off roughly 20% of global crude supply and sending Brent above $110. Oil is not just an energy price \u2014 it is a tax on everything. It squeezes consumers, raises input costs, and forces the Fed into an impossible position: cut rates to support growth or hold rates to fight the inflation that energy prices are generating. Traders pushed the probability of a rate hike by year-end above 50% in March, a dramatic reversal from the consensus expectation of continued cuts. Moody\u2019s recession probability model hit 49% based on February data \u2014 before the Iran conflict\u2019s full impact. The S&amp;P 500 sits at roughly 6,370, down 7% year to date. The Nasdaq is in correction territory, nearly 13% off its October high.</p>

            <p>The AI story required a cooperative macro environment to sustain it \u2014 low rates, stable energy, no geopolitical disruptions. That environment no longer exists. The story hasn\u2019t been disproven. It has encountered conditions that make the perfection embedded in prices less plausible. And as we discussed in previous blogs: the market doesn\u2019t need bad news to reprice. It only needs less-than-perfect news. When you pay for a miracle, reality is the disappointment.</p>

            <h2>The Weighing Machine Wakes Up</h2>

            <p>Graham\u2019s metaphor from Blog 2 \u2014 voting machine in the short run, weighing machine in the long run \u2014 is playing out in real time. In February, utilities surged 10% while technology, financials, and consumer discretionary each fell roughly 4%. Since October 2025, gold, biotech, energy, and materials have led gains while Nvidia, Tesla, Meta, and Microsoft have lagged sharply. Value stocks have outperformed growth in every recent period of AI skepticism: Q3 2024, Q1 2025, Q4 2025, and now Q1 2026.</p>

            <p>This is capital moving from stories to substance. From narratives to cash flows. The structural reasons from Blog 3 explain why it is happening slowly: professional managers controlling 55\u201360% of US equities face career risk for deviating from the benchmark. GQG\u2019s Jain writes explicitly about this \u2014 their decision to avoid AI stocks cost significant relative performance in 2025, even though the math doesn\u2019t support the valuations. These structural constraints mean that even when the case for rotation is clear, the majority of capital cannot act on it. That is why mispricings persist and rotations take time.</p>

            <h2>You Have Not Missed It</h2>

            <p>If value is already outperforming, have you missed the move? Almost certainly not. Sector rotations typically last two to two and a half years, aligning with broader business cycle phases. The average US business cycle since 1945 has lasted about six years. Market rotations also tend to precede economic changes by three to six months \u2014 the rotation we are seeing reflects what the market believes is coming, not what has already happened. If macro headwinds intensify, this has a long way to run.</p>

            <p>History supports this. After the dot-com peak in 2000, value outperformed growth for roughly seven years. In 2022, the rotation into energy and value lasted well over a year. The behavioral dynamics \u2014 career risk, herding, loss aversion, anchoring \u2014 mean the crowd changes its story slowly, creating sustained momentum in rotational flows. Think of it in physics terms: trillions of dollars allocated to AI and growth stocks over three years do not reverse overnight. Every index fund rebalance, every quarterly portfolio review, every committee meeting where the discussion shifts from \u201Cshould we add more tech?\u201D to \u201Cshould we reduce tech?\u201D pushes the rotation forward. The process is measured in quarters and years, not days and weeks.</p>

            <h2>Where the Next Story Is Forming</h2>

            <p>Money is not simply flowing into sectors as a whole. It is flowing toward specific characteristics: strong and consistent free cash flow, stable or growing earnings that do not depend on an optimistic macro scenario, healthy balance sheets, reasonable valuations, and businesses that sell things people need regardless of whether AI fulfills its promises or the economy slows. Companies that do not require a miracle to justify their stock price.</p>

            <p>These characteristics are most concentrated in utilities, consumer staples, healthcare, and insurance \u2014 sectors trading at historically low relative P/E ratios despite delivering high single-digit earnings growth and 3\u20134% dividend yields. GQG argues these can deliver low double-digit total returns with significantly lower risk than the broader market. When you can get similar returns for lower risk, the math favors the boring companies.</p>

            <p>But the rotation is not limited to traditional defensives. Energy benefits from geopolitical tailwinds and structural underinvestment in supply. Natural resource equities and real assets have been outperforming the Nasdaq as beneficiaries of AI infrastructure demand (data centers need enormous amounts of power and raw materials), energy transitions, and manufacturing reshoring. International markets also deserve attention \u2014 the Euro Stoxx 50 trades at roughly 14 times earnings with a 4% dividend yield versus the S&amp;P 500 at over 20 times. Any unwinding of the \u201CAmerican exceptionalism\u201D concentration trade has a long runway.</p>

            <p>The broader point: for the first time in years, there are compelling places to put capital outside of the handful of mega-cap tech stocks that have dominated returns. The extreme concentration of the last three years created a mirror image of opportunity in what was neglected. That is expectations mean reversion at work. I am still doing deeper research into individual companies and will share specific names when I have real conviction. That is coming in future blogs.</p>

            <h2>The Hardest Part</h2>

            <p>The hardest part is not intellectual. It is emotional. Right now the dominant story is still AI. Turn on CNBC and you hear about the next trillion-dollar opportunity. Open social media and people are talking about which AI stock to buy on the dip. The alternative \u2014 buying a water utility or a tobacco company or an insurance conglomerate \u2014 feels boring, feels wrong, feels like giving up on the future. But that discomfort is the behavioral gap we are trying to exploit. If it felt good, everyone would do it, and there would be no excess returns to capture.</p>

            <p>GQG\u2019s Jain closes his letter noting that for the first time in years, his team is finding \u201Cplenty of opportunities to own companies with the potential to achieve double-digit compounding in fairly mundane sectors.\u201D Mundane. That is the word. Mundane is where the value is forming while everyone else watches the AI spectacle. The weighing machine does not care about spectacle. It cares about cash flows. And over time, it always wins.</p>

            <p>The story driving markets right now is cracking. Not because AI is fake \u2014 it isn\u2019t. Not because the technology doesn\u2019t matter \u2014 it does. But because the prices reflecting that story have stretched beyond what the cash flows can support, and the macro environment that enabled the stretch is changing. When the story shifts, the companies with real earnings, real balance sheets, and real competitive positions will be the ones still standing. Finding them now, before the crowd arrives, is the entire game.</p>

            <hr style="margin: 2rem 0;">

            <p>I don\u2019t want to and never will make a single dime off of this blog. I do this purely for my own learning, and to help others learn more about markets and investing.</p>

            <p>So share with a friend or family member if you enjoyed. Let\u2019s get more people knowledgeable about investing.</p>

            <hr style="margin: 2rem 0;">
            <section class="subscribe-section">
                <div class="section-header">
                    <h2 class="section-title">Stay in the Loop</h2>
                    <p class="section-subtitle">Get an email when a new post goes live.</p>
                </div>
                <form class="subscribe-form" action="https://buttondown.com/api/emails/embed-subscribe/keaton" method="post" target="popupwindow" onsubmit="window.open('https://buttondown.com/keaton', 'popupwindow')">
                    <input type="hidden" name="embed" value="1">
                    <input class="subscribe-input" type="email" name="email" placeholder="Enter your email" required>
                    <button class="subscribe-button" type="submit">Notify Me</button>
                </form>
                <p class="subscribe-note">No spam. Unsubscribe anytime.</p>
            </section>
        `
    }
];
