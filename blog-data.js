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
            <p>But I also really am curious about markets, investing, and how psychology comes into play within these areas. And I feel everyone reading these has the capabilities to understand these domains and apply them to their own portfolios. So, I want to help give everyone reading these blogs the tools and frameworks to do that.</p>
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
        `
    }
];

